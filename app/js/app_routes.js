'use strict';

define(['app'], function (app) {

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    
        $routeProvider.
            when('/subnational',         				                                                                           { templateUrl: '/app/views/subnational/index.html' }).
            when('/subnational/get-involved',                                                                                      { templateUrl: '/app/views/subnational/get-involved/get-involved.html' }).
            when('/subnational/about',    							                                                               { templateUrl: '/app/views/subnational/home/about.html' }).
            when('/subnational/events',                                                                                            { templateUrl: '/app/views/subnational/events/events.html' }).
            when('/subnational/about/aichi-biodiversity-targets',                                                                  { templateUrl: '/app/views/subnational/home/aichi-biodiversity-targets.html' }).
            when('/subnational/about/cbd-plan-of-action',   		                                                               { templateUrl: '/app/views/subnational/home/cbd-plan-of-action.html' }).
            when('/subnational/resources',							                                                               { templateUrl: '/app/views/subnational/resources/resources.html' }).
            when('/subnational/resources/decisions',				                                                               { templateUrl: '/app/views/subnational/resources/decisions.html' }).
            when('/subnational/resources/documents',                                                                               { templateUrl: '/app/views/subnational/resources/documents.html' }).
            when('/subnational/resources/case-studies',				                                                               { templateUrl: '/app/views/subnational/resources/case-studies.html' }).
            when('/subnational/resources/presentations',                                                                           { templateUrl: '/app/views/subnational/resources/presentations.html' }).
            when('/subnational/resources/additional-information',                                                                  { templateUrl: '/app/views/subnational/resources/additional-information.html' }).
            when('/subnational/resources/strategies-and-action-plans',                                                             { templateUrl: '/app/views/subnational/resources/strategies-and-action-plans.html' }).
            when('/subnational/resources/strategies-and-action-plans/training-module',                                             { templateUrl: '/app/views/subnational/resources/training-module.html' }).
            when('/subnational/guidelines',                                                                                        { templateUrl: '/app/views/subnational/guidelines/guidelines.html' }).
            when('/subnational/partners-and-initiatives',			                                                               { templateUrl: '/app/views/subnational/partners-and-initiatives/partners-and-initiatives.html' }).
            when('/subnational/partners-and-initiatives/global-partnership',                                                       { templateUrl: '/app/views/subnational/partners-and-initiatives/global-partnership.html' }).
            when('/subnational/partners-and-initiatives/global-partnership/advisory-committee-on-cities-and-biodiversity',         { templateUrl: '/app/views/subnational/partners-and-initiatives/advisory-committee-on-cities-and-biodiversity.html' }).
            when('/subnational/partners-and-initiatives/global-partnership/advisory-committee-on-sub-national-governments',        { templateUrl: '/app/views/subnational/partners-and-initiatives/advisory-committee-on-sub-national-governments.html' }).
            when('/subnational/partners-and-initiatives/cbo', 		                                                               { templateUrl: '/app/views/subnational/partners-and-initiatives/cbo.html' }).
            when('/subnational/partners-and-initiatives/cbo/overview',                                                             { templateUrl: '/app/views/subnational/partners-and-initiatives/cbo/overview.html' }).
            when('/subnational/partners-and-initiatives/cbo/overview/strategy',                                                    { templateUrl: '/app/views/subnational/partners-and-initiatives/cbo/strategy.html' }).
            when('/subnational/partners-and-initiatives/cbo/overview/advisory-committee',                                          { templateUrl: '/app/views/subnational/partners-and-initiatives/cbo/advisory-committee.html' }).
            when('/subnational/partners-and-initiatives/cbo/overview/inter-agency-task-force',                                     { templateUrl: '/app/views/subnational/partners-and-initiatives/cbo/inter-agency-task-force.html' }).
            when('/subnational/partners-and-initiatives/cbo/overview/timeline-and-consulation-plan',                               { templateUrl: '/app/views/subnational/partners-and-initiatives/cbo/timeline-and-consulation-plan.html' }).
            when('/subnational/partners-and-initiatives/cbo/related-activities',                                                   { templateUrl: '/app/views/subnational/partners-and-initiatives/cbo/related-activities.html' }).
            when('/subnational/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary',                              { templateUrl: '/app/views/subnational/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary.html' }).
            when('/subnational/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary/preface-and-overview',         { templateUrl: '/app/views/subnational/partners-and-initiatives/cbo/preface-and-overview.html' }).
            when('/subnational/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary/key-messages',                 { templateUrl: '/app/views/subnational/partners-and-initiatives/cbo/key-messages.html' }).
            when('/subnational/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary/challenges-and-opportunities', { templateUrl: '/app/views/subnational/partners-and-initiatives/cbo/challenges-and-opportunities.html' }).                                                                       
            when('/subnational/partners-and-initiatives/cbo/cbo-scientific-analysis-and-assessment',                               { templateUrl: '/app/views/subnational/partners-and-initiatives/cbo/cbo-scientific-analysis-and-assessment.html' }).            
            when('/subnational/partners-and-initiatives/cbo/resources',                                                            { templateUrl: '/app/views/subnational/partners-and-initiatives/cbo/resources.html' }).   
            when('/subnational/partners-and-initiatives/city-biodiversity-index',                                                  { templateUrl: '/app/views/subnational/partners-and-initiatives/city-biodiversity-index.html' }).
            when('/subnational/partners-and-initiatives/iclei',                                                                    { templateUrl: '/app/views/subnational/partners-and-initiatives/iclei.html' }).
            when('/subnational/partners-and-initiatives/local-action-for-biodiversity-lab',                                        { templateUrl: '/app/views/subnational/partners-and-initiatives/local-action-for-biodiversity-lab.html' }).
            when('/subnational/partners-and-initiatives/medivercities',                                                            { templateUrl: '/app/views/subnational/partners-and-initiatives/medivercities.html' }).
            when('/subnational/partners-and-initiatives/mitin',                                                                    { templateUrl: '/app/views/subnational/partners-and-initiatives/mitin.html' }).
            when('/subnational/partners-and-initiatives/nrg4sd',                                                                   { templateUrl: '/app/views/subnational/partners-and-initiatives/nrg4sd.html' }).
            when('/subnational/partners-and-initiatives/stockholm-resilience-centre',                                              { templateUrl: '/app/views/subnational/partners-and-initiatives/stockholm-resilience-centre.html' }).
            when('/subnational/partners-and-initiatives/un-habitat',                                                               { templateUrl: '/app/views/subnational/partners-and-initiatives/un-habitat.html' }).
            when('/subnational/partners-and-initiatives/urbio',                                                                    { templateUrl: '/app/views/subnational/partners-and-initiatives/urbio.html' }).         
            when('/subnational/help/404', 							                                                               { templateUrl: '/app/views/subnational/help/404.html' }).
            otherwise({redirectTo:'/subnational/help/404'});
    }]);
});