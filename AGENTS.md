# AGENTS.md

Guidance for AI coding agents working in this repository.

## Overview

Source for the CBD "Subnational and Local Implementation" portal, served at https://www.cbd.int/subnational. It is a mostly static, content-driven AngularJS 1.4 single-page app (RequireJS + Bootstrap 3 + jQuery) behind a small Express server. There is no database, no build step in use, and no test or lint suite.

## Commands

```sh
yarn install        # or npm install; postinstall runs `bower install` into subnational/app/libs
npm start           # node server.js, listens on $PORT (default 8000)
```

Then open http://localhost:8000/subnational.

Docker (this is what CI and production use; base image is `node:12.0-alpine`):

```sh
docker build -t subnational .
docker run -p 8000:8000 subnational
```

CI's only check is a smoke test: build the image, run it, and `curl http://localhost:8000/`.

`gruntfile.js` is legacy: its grunt plugins are not in `package.json`, and its `app_build/` output is gitignored and not used by `server.js` or the Dockerfile. Do not rely on it or edit `app_build/`.

## Architecture

### Server ([server.js](server.js))

- Serves `subnational/app/` statically at `/subnational/app`.
- Proxies `/api/*` to `https://api.cbd.int`.
- Every other `/subnational*` URL returns `subnational/app/template.html`, so AngularJS handles routing client-side (HTML5 mode).

### Client (`subnational/app/`)

- `template.html` is the page shell (header, nav, footer, `ng-view`). It loads `libs/requirejs/require.js` with `data-main="js/boot.js"`.
- `js/boot.js` holds the RequireJS config (paths/shims for angular, jquery, bootstrap) and manually bootstraps the `app` module.
- `js/app.js` defines the `app` module and replaces `app.controller` / `app.directive` with the provider `register` functions, so controllers and directives can be registered lazily after bootstrap.
- `js/app_routes.js` declares every route explicitly. Each route's `resolveDependencies()` `require()`s `<templateUrl>.js` before the view renders.
- `libs/` is populated by Bower (see [.bowerrc](.bowerrc)) and gitignored. Library versions are pinned in [bower.json](bower.json).

### View convention

Each page is a pair under `subnational/app/views/<section>/`:

- `<page>.html` - the template (mostly static content).
- `<page>.html.js` - an AMD module loaded by the route resolver. It registers the page controller via `require('app').controller(...)` and typically sets `$rootScope.portal`, `$rootScope.homePage`, and `$rootScope.navigation` (the sub-navigation links). Some just `define` a dependency on a sibling section's `.html.js` to reuse its navigation.

To add a page: create both files, then add a `when(...)` entry in `js/app_routes.js` with `resolve: { dependencies: resolveDependencies() }`. A route without a matching `.html.js` file will fail to resolve.

Shared UI lives in `template.html.js` (`TemplateController`, the home carousel setup, and the `eventsLists` directive that reads `views/events/events.json`). `*.partial.html` files are directive or `ng-include` templates, not routes.

## Deployment

CircleCI ([.circleci/config.yml](.circleci/config.yml)) builds and pushes Docker images to Docker Hub as `scbd/<repo>`:

| Trigger                           | Image tag                       |
| --------------------------------- | ------------------------------- |
| Branch `master`, `dev`, `stg`     | branch name                     |
| Branch `release/<x>`              | `release-<x>`                   |
| Tag matching `v?N(.N)*`           | tag without `v`, plus `latest`  |
| Any other branch                  | build and smoke test only       |

`deploy.sh` is a legacy manual push to an internal registry.

## SCBD development standards

From the SCBD [Software Development Standards](https://github.com/scbd/documentation/blob/master/devops/software-development-standards.md). The parts that apply to this repo:

- **Style:** JavaScript follows `semistandard`, max line length 120. Not enforced by tooling here, so match the surrounding code when editing existing files.
- **Naming:** camelCase variables/functions/parameters, PascalCase classes, UPPER_SNAKE_CASE constants and env vars, kebab-case files and directories. Booleans use `is`/`has` with positive phrasing.
- **Control flow:** prefer early returns (short-circuit guards) over nested conditionals.
- **Comments:** minimal, explain "why" not "what"; JSDoc for non-trivial functions.
- **Branches:** `<type>/<ticket-id>-<short-description>`, optionally prefixed with `<user>/`. Types: `feature`, `bugfix`, `hotfix`, `release`, `chore`, `docs`, `test`, `spike`. Example: `feature/JIRA-123-add-partner-page`.
- **Commits:** imperative mood, lowercase, no trailing period, subject max 72 chars, optional `(<scope>)` prefix, e.g. `(views) add regions4 partner page`. Small, atomic commits that don't break the build.
- **Tags:** `<year>.<weekOfYear>.<patch>`, e.g. `2025.14.0`. These match the CI tag filter and trigger a release image.
- **Workflow:** GitHub Flow on `master` (protected). Branch from a Jira ticket, open a PR, squash-merge feature branches (rebase-merge hotfixes), delete the branch after merge. PR titles follow the commit message format.
