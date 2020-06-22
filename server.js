'use strict';
/* jshint node:true */
var fs = require('fs');
var http = require('http');
var express = require('express');
var httpProxy = require('http-proxy');

// Create server

var app = express();
var server = http.createServer(app);
var oneDay = 24*60*60*1000;

app.use('/subnational/app', express.static(__dirname + '/subnational/app'));

// Configure routes

var proxy = httpProxy.createProxyServer({});

app.get   ('/subnational/app/*', function(req, res) { res.send('404', 404); } );
app.get   ('/public/*',   function(req, res) { res.send('404', 404); } );
app.all   ('/api/*',      function(req, res) { proxy.web(req, res, { target: 'https://api.cbd.int', secure: false } ); } );

// Configure index.html

app.get('/subnational*', function(req, res) {
	fs.readFile(__dirname + '/subnational/app/template.html', 'utf8', function (error, text) {
		res.send(text);
	});
});

// START HTTP SERVER

app.listen(process.env.PORT || 8000, '0.0.0.0', function () {
	console.log('Server listening on %j', this.address());
});

// Handle proxy errors ignore

proxy.on('error', function (e,req, res) {
    console.error('proxy error:', e);
    res.status(502).send();
});
