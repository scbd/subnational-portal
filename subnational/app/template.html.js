define(['app', 'jquery'], function (app, $) {
	'use strict';

	app.controller('TemplateController', ['$scope', '$location', function ($scope, $location) {

    	$scope.controller = "TemplateController";

    	_loadCss('/subnational/app/libs/font-awesome/css/font-awesome.css');
        //_loadCss('//fast.fonts.net/cssapi/ab363dc0-d9f9-4148-a52d-4dca15df47ba.css');

		$scope.currentPath = function () { return $location.path(); };

	}]);

    $(document).ready(function() {
		$('#homeCarousel').carousel({
	         interval: 6000
		 });
    });


	function _loadCss(url) {
	    var link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = url;
	    document.getElementsByTagName("head")[0].appendChild(link);
	}



	app.directive('eventsLists', ['$http', function($http) {
	    return {
	        restrict: 'EAC',
	        templateUrl: '/subnational/app/views/events/events.partial.html',
	        scope: {
	        },
	        controller: ["$scope", function ($scope) 
	        {
	            $http.get('/subnational/app/views/events/events.json').success(function (data) {
	                $scope.events = data.events;
	            });
	        }] 

    }}]);
});

