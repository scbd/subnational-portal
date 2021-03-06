define(['app', 'angular'], function (app, angular) {
	'use strict';

	app.controller('TemplateController', ['$scope', '$location', function ($scope, $location) {

    	$scope.controller = "TemplateController";

    	_loadCss('/subnational/app/libs/font-awesome/css/font-awesome.css');

			$scope.currentPath = function () { return $location.path(); };

			angular.element(document).ready(function () {
					angular.element('#homeCarousel').carousel({
								 interval: 6000
					 });
					
					$('#homeCarousel .item').each(function(){
						var next = $(this).next();
						if (!next.length) {
							next = $(this).siblings(':first');
						}
						next.children(':first-child').clone().appendTo($(this));
						
						if (next.next().length>0) {
							next.next().children(':first-child').clone().appendTo($(this));
						}
						if(next.next().next().length>0){
							next.next().next().children(':first-child').clone().appendTo($(this));
						}
						else {
							$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
						}
					});
			});
	}]);

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
