'use strict';

define(['app'], function (app) {

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    
        $routeProvider.
            when('/',         							   { templateUrl: '/app/views/index.html'    }).
            when('/subnational',         				   { templateUrl: '/app/views/index.html'    }).
            when('/get-involved',                          { templateUrl: '/app/views/get-involved/get-involved.html'}).
            when('/about',    							   { templateUrl: '/app/views/home/about.html'    }).
            when('/events',                                { templateUrl: '/app/views/events/events.html'    }).
            when('/about/aichi-biodiversity-targets',      { templateUrl: '/app/views/home/aichi-biodiversity-targets.html'    }).
            when('/about/cbd-plan-of-action',   		   { templateUrl: '/app/views/home/cbd-plan-of-action.html' }).
            when('/resources',							   { templateUrl: '/app/views/resources/resources.html'}).
            when('/resources/decisions',				   { templateUrl: '/app/views/resources/decisions.html'}).
            when('/resources/documents',                   { templateUrl: '/app/views/resources/documents.html'}).
            when('/resources/case-studies',				   { templateUrl: '/app/views/resources/case-studies.html'}).
            when('/resources/presentations',               { templateUrl: '/app/views/resources/presentations.html'}).
            when('/resources/additional-information',      { templateUrl: '/app/views/resources/additional-information.html'}).
            when('/resources/strategies-and-action-plans', { templateUrl: '/app/views/resources/strategies-and-action-plans.html'}).
            when('/resources/strategies-and-action-plans/training-module', 
                                                           { templateUrl: '/app/views/resources/training-module.html'}).
            when('/guidelines',                            { templateUrl: '/app/views/guidelines/guidelines.html'}).
            when('/partners-and-initiatives',			   { templateUrl: '/app/views/partners-and-initiatives/partners-and-initiatives.html'}).
            when('/partners-and-initiatives/global-partnership', { templateUrl: '/app/views/partners-and-initiatives/global-partnership.html'}).
            when('/partners-and-initiatives/global-partnership/advisory-committee-on-cities-and-biodiversity', 
                                                           { templateUrl: '/app/views/partners-and-initiatives/advisory-committee-on-cities-and-biodiversity.html'}).
            when('/partners-and-initiatives/global-partnership/advisory-committee-on-sub-national-governments', 
                                                           { templateUrl: '/app/views/partners-and-initiatives/advisory-committee-on-sub-national-governments.html'}).
            when('/partners-and-initiatives/cbo', 		   { templateUrl: '/app/views/partners-and-initiatives/cbo.html'}).
            when('/partners-and-initiatives/cbo/overview', { templateUrl: '/app/views/partners-and-initiatives/cbo/overview.html'}).
            when('/partners-and-initiatives/cbo/overview/strategy', 
                                                           { templateUrl: '/app/views/partners-and-initiatives/cbo/strategy.html'}).
            when('/partners-and-initiatives/cbo/overview/advisory-committee', 
                                                           { templateUrl: '/app/views/partners-and-initiatives/cbo/advisory-committee.html'}).
            when('/partners-and-initiatives/cbo/overview/inter-agency-task-force', 
                                                           { templateUrl: '/app/views/partners-and-initiatives/cbo/inter-agency-task-force.html'}).
            when('/partners-and-initiatives/cbo/overview/timeline-and-consulation-plan', 
                                                           { templateUrl: '/app/views/partners-and-initiatives/cbo/timeline-and-consulation-plan.html'}).
            when('/partners-and-initiatives/cbo/related-activities', { templateUrl: '/app/views/partners-and-initiatives/cbo/related-activities.html'}).
            when('/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary',       
                                                           { templateUrl: '/app/views/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary.html'}).
            when('/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary/preface-and-overview',       
                                                           { templateUrl: '/app/views/partners-and-initiatives/cbo/preface-and-overview.html'}).
            when('/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary/key-messages',       
                                                           { templateUrl: '/app/views/partners-and-initiatives/cbo/key-messages.html'}).
            when('/partners-and-initiatives/cbo/cbo-action-and-policy-executive-summary/challenges-and-opportunities',       
                                                           { templateUrl: '/app/views/partners-and-initiatives/cbo/challenges-and-opportunities.html'}).                                                                       
            when('/partners-and-initiatives/cbo/cbo-scientific-analysis-and-assessment',       
                                                           { templateUrl: '/app/views/partners-and-initiatives/cbo/cbo-scientific-analysis-and-assessment.html'}).            
            when('/partners-and-initiatives/cbo/resources',{ templateUrl: '/app/views/partners-and-initiatives/cbo/resources.html'}).   
            when('/partners-and-initiatives/city-biodiversity-index', { templateUrl: '/app/views/partners-and-initiatives/city-biodiversity-index.html'}).
            when('/partners-and-initiatives/iclei', { templateUrl: '/app/views/partners-and-initiatives/iclei.html'}).
            when('/partners-and-initiatives/local-action-for-biodiversity-lab', { templateUrl: '/app/views/partners-and-initiatives/local-action-for-biodiversity-lab.html'}).
            when('/partners-and-initiatives/medivercities', { templateUrl: '/app/views/partners-and-initiatives/medivercities.html'}).
            when('/partners-and-initiatives/mitin', { templateUrl: '/app/views/partners-and-initiatives/mitin.html'}).
            when('/partners-and-initiatives/nrg4sd', { templateUrl: '/app/views/partners-and-initiatives/nrg4sd.html'}).
            when('/partners-and-initiatives/stockholm-resilience-centre', { templateUrl: '/app/views/partners-and-initiatives/stockholm-resilience-centre.html'}).
            when('/partners-and-initiatives/un-habitat', { templateUrl: '/app/views/partners-and-initiatives/un-habitat.html'}).
            when('/partners-and-initiatives/urbio', { templateUrl: '/app/views/partners-and-initiatives/urbio.html'}).         
            when('/help/404', 							   { templateUrl: '/app/views/help/404.html' }).
            otherwise({redirectTo:'/help/404'});
    }]);
});