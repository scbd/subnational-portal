'use strict';


require.config({
    baseUrl : '/subnational/app/js',
    paths: {
        'angular'         : '../libs/angular/angular',
        'angular-route'   : '../libs/angular-route/angular-route',
        'jquery'          : '../libs/jquery/dist/jquery.min',
        'bootstrap'       : '../libs/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        'angular'       : { 'deps': ['jquery'], 'exports': 'angular' },
        'angular-route' : { 'deps': ['angular'] },
        'bootstrap'     : { 'deps': ['jquery'] }
    }
});

require(['angular', 'app', 'angular-route', 'bootstrap', 'app_routes', '../template.html'], function (ng, app) {

    ng.element(document).ready(function () {
         ng.bootstrap(document, [app.name]);
    });
});
