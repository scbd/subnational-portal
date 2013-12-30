'use strict';

define(['app'], function (app) {

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    
        $routeProvider.
            when('/',         { templateUrl: '/app/views/index.html'    }).
            when('/help/404', { templateUrl: '/app/views/help/404.html' }).
            otherwise({redirectTo:'/help/404'});
    }]);
});