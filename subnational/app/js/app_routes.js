'use strict';

define(['app'], function (app) {

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        $routeProvider.
            // when('/subnational/help/under-construction', { templateUrl: '/subnational/app/views/under-construction.html' }).
            // otherwise({redirectTo:'/subnational/help/under-construction'});

            when('/subnational',
                {   templateUrl: '/subnational/app/views/index.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/get-involved',
                {   templateUrl: '/subnational/app/views/get-involved/get-involved.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/about',
                { templateUrl: '/subnational/app/views/home/about.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/events',
                { templateUrl: '/subnational/app/views/events/events.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/about/aichi-biodiversity-targets',
                { templateUrl: '/subnational/app/views/home/aichi-biodiversity-targets.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/about/cbd-plan-of-action',
                { templateUrl: '/subnational/app/views/home/cbd-plan-of-action.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/resources',
                { templateUrl: '/subnational/app/views/resources/resources.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/resources/decisions',
                { templateUrl: '/subnational/app/views/resources/decisions.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/resources/documents',
                { templateUrl: '/subnational/app/views/resources/documents.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/resources/case-studies',
                { templateUrl: '/subnational/app/views/resources/case-studies.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/resources/presentations',
                { templateUrl: '/subnational/app/views/resources/presentations.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/resources/additional-information',
                { templateUrl: '/subnational/app/views/resources/additional-information.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/resources/strategies-and-action-plans',
                { templateUrl: '/subnational/app/views/resources/strategies-and-action-plans.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/resources/strategies-and-action-plans/training-module',
                { templateUrl: '/subnational/app/views/resources/training-module.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/guidelines',
                { templateUrl: '/subnational/app/views/guidelines/guidelines.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/partners-and-initiatives.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/global-partnership',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/global-partnership.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/global-partnership/advisory-committee-on-cities-and-biodiversity',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/advisory-committee-on-cities-and-biodiversity.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/global-partnership/advisory-committee-on-sub-national-governments',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/advisory-committee-on-sub-national-governments.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/cbo',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/cbo.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/cbo/overview',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/cbo/overview.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/cbo/overview/strategy',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/cbo/strategy.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/cbo/overview/advisory-committee',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/cbo/advisory-committee.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/cbo/overview/inter-agency-task-force',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/cbo/inter-agency-task-force.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/cbo/overview/timeline-and-consulation-plan',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/cbo/timeline-and-consulation-plan.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/cbo/related-activities',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/cbo/related-activities.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary/preface-and-overview',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/cbo/preface-and-overview.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary/key-messages',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/cbo/key-messages.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary/challenges-and-opportunities',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/cbo/challenges-and-opportunities.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/cbo/cbo-scientific-analysis-and-assessment',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/cbo/cbo-scientific-analysis-and-assessment.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/cbo/resources',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/cbo/resources.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/city-biodiversity-index',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/city-biodiversity-index.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/iclei',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/iclei.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/local-action-for-biodiversity-lab',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/local-action-for-biodiversity-lab.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/medivercities',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/medivercities.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/mitin',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/mitin.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/nrg4sd',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/nrg4sd.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/stockholm-resilience-centre',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/stockholm-resilience-centre.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/un-habitat',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/un-habitat.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/partners-and-initiatives/urbio',
                { templateUrl: '/subnational/app/views/partners-and-initiatives/urbio.html',
                    resolve: { dependencies: resolveDependencies() } }).
            when('/subnational/help/404',
                { templateUrl: '/subnational/app/views/help/404.html',
                    resolve: { dependencies: resolveDependencies() } }).
            otherwise({redirectTo:'/subnational/help/404'});

        //==================================================
        //
        //
        //==================================================
        function resolveUser() {

            return ['$rootScope', 'authentication', function($rootScope, authentication) {
                return authentication.getUser().then(function (user) {
                    $rootScope.user = user;
                    return user;
                });
            }];
        }

        //==================================================
        //
        //
        //==================================================
        function resolveDependencies(dependencies) {
            return ['$q', '$route', function($q, $route) {

                var deferred = $q.defer();

                require([$route.current.$$route.templateUrl + ".js"], function() {
                    deferred.resolve();
                });

                return deferred.promise;
            }];
        }
    }]);
});
