'use strict';

// Smoke tests: start server.js on a random port and check the main pages,
// static assets, the /api proxy and the Node version.

const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const path = require('node:path');
const { spawn } = require('node:child_process');

const ROOT = path.join(__dirname, '..');
const pkg = require('../package.json');

let server;
let base;
let log = '';
let apiStub;
const apiRequests = [];

function listen(srv) {
    return new Promise((resolve) => srv.listen(0, '127.0.0.1', () => resolve(srv.address().port)));
}

before(async () => {
    // Local stand-in for the upstream API so the proxy can be tested offline.
    apiStub = http.createServer((req, res) => {
        apiRequests.push(req.url);
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify({ ok: true, url: req.url }));
    });
    const apiPort = await listen(apiStub);

    const probe = http.createServer();
    const port = await listen(probe);
    await new Promise((r) => probe.close(r));

    server = spawn(process.execPath, ['server.js'], {
        cwd: ROOT,
        env: { ...process.env, PORT: String(port), API_URL: `http://127.0.0.1:${apiPort}` },
        stdio: ['ignore', 'pipe', 'pipe'],
    });
    server.stdout.on('data', (d) => { log += d; });
    server.stderr.on('data', (d) => { log += d; });

    base = `http://127.0.0.1:${port}`;
    const deadline = Date.now() + 15000;
    while (!/Server listening/.test(log)) {
        if (server.exitCode !== null) throw new Error('server exited:\n' + log);
        if (Date.now() > deadline) throw new Error('server did not start:\n' + log);
        await new Promise((r) => setTimeout(r, 100));
    }
});

after(async () => {
    if (server && server.exitCode === null) server.kill();
    if (apiStub) await new Promise((r) => apiStub.close(r));
});

function satisfiesEngines(version) {
    // Mirrors engines.node: ^22.23.4 || ^24.22.1 || >=26.12.1
    const [maj, min, pat] = version.replace(/^v/, '').split('.').map(Number);
    const gte = (a, b, c) => min > b || (min === b && pat >= c);
    if (maj === 22) return gte(22, 23, 4);
    if (maj === 24) return gte(24, 22, 1);
    if (maj === 26) return gte(26, 12, 1);
    return maj > 26;
}

test('Node version satisfies engines.node (CVE-2026-111497 patched)', () => {
    assert.equal(pkg.engines.node, '^22.23.4 || ^24.22.1 || >=26.12.1');
    assert.ok(satisfiesEngines(process.version), `unpatched Node ${process.version}`);
    assert.ok(!satisfiesEngines('v24.22.0'));
    assert.ok(!satisfiesEngines('v20.19.0'));
    assert.ok(satisfiesEngines('v22.23.4'));
});

const pages = [
    '/subnational',
    '/subnational/',
    '/subnational/resources',
    '/subnational/partners-and-initiatives',
    '/subnational/partners-and-initiatives/cbo',
    '/subnational/events',
    '/subnational/guidelines',
];

for (const p of pages) {
    test(`GET ${p} returns the app shell`, async () => {
        const res = await fetch(base + p);
        assert.equal(res.status, 200);
        assert.match(res.headers.get('content-type'), /text\/html/);
        const body = await res.text();
        assert.match(body, /<title>Subnational and Local Implementation<\/title>/);
        assert.match(body, /data-main="\/subnational\/app\/js\/boot\.js"/);
    });
}

const assets = [
    ['/subnational/app/css/main.css', /text\/css/],
    ['/subnational/app/css/subnational.css', /text\/css/],
    ['/subnational/app/js/boot.js', /javascript/],
    ['/subnational/app/js/app_routes.js', /javascript/],
    ['/subnational/app/views/index.html', /text\/html/],
    ['/subnational/app/img/cbd-logo-en.min.svg', /image\/svg/],
    ['/subnational/app/favicon.ico', /icon/],
    ['/subnational/app/libs/bootstrap/dist/css/bootstrap.min.css', /text\/css/],
    ['/subnational/app/libs/requirejs/require.js', /javascript/],
    ['/subnational/app/libs/angular/angular.js', /javascript/],
    ['/subnational/app/libs/jquery/dist/jquery.min.js', /javascript/],
];

for (const [p, type] of assets) {
    test(`GET ${p} serves the static asset`, async () => {
        const res = await fetch(base + p);
        assert.equal(res.status, 200);
        assert.match(res.headers.get('content-type'), type);
        assert.ok((await res.arrayBuffer()).byteLength > 0);
    });
}

test('missing static asset returns 404', async () => {
    const res = await fetch(base + '/subnational/app/does-not-exist.js');
    assert.equal(res.status, 404);
    await res.text();
});

function logLines() {
    return log.split('\n').filter((l) => l.trim() && !/^Server listening/.test(l));
}

test('server log is clean after serving pages and assets', () => {
    assert.deepEqual(logLines(), []);
});

test('/api/* is proxied to API_URL', async () => {
    const res = await fetch(base + '/api/v2013/index?q=test');
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.url, '/api/v2013/index?q=test');
    assert.deepEqual(apiRequests, ['/api/v2013/index?q=test']);
});

// http-proxy (latest 1.18.1, unmaintained) still calls util._extend on the
// first proxied request. That dependency-level DEP0060 warning is the only
// output tolerated; anything else (errors, other deprecations) fails.
const KNOWN_DEPENDENCY_WARNINGS = [
    /\[DEP0060\] DeprecationWarning: The `util\._extend` API is deprecated/,
    /^\(Use `node --trace-deprecation \.\.\.` to show where the warning was created\)$/,
];

test('server log is clean (only the known http-proxy DEP0060 warning)', () => {
    const lines = logLines().filter((l) => !KNOWN_DEPENDENCY_WARNINGS.some((re) => re.test(l)));
    assert.deepEqual(lines, []);
});
