
require('app').controller('PartnersAndInitiativesPageController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.controller = 'PartnersAndInitiativesPageController';

	$rootScope.homePage = false;
	$rootScope.portal = 'partners-and-initiatives';
	$rootScope.navigation = [
			{ url: '/subnational/partners-and-initiatives/global-partnership', title: 'Global Partnership' }
		];
	$scope.showme = false;
	$scope.showmoreless = function(){$scope.showme=!$scope.showme};

	$('#accordion h3.panel-title > a').click(function() {
		if($($(this).attr('href')).hasClass('in'))
		{
			$('i.glyphicon-chevron-down').addClass('hide');
			$('i.glyphicon-chevron-right', this).removeClass('hide');
		}
		else
		{
			$('i.glyphicon-chevron-down').addClass('hide');
			$('i.glyphicon-chevron-right').removeClass('hide');

			$('i.glyphicon-chevron-down', this).removeClass('hide');			
			$('i.glyphicon-chevron-right', this).addClass('hide');
		}
	});
}]);



require('app').directive('cboMenu', [function() {
    return {
        restrict: 'EAC',
        templateUrl: '/subnational/app/views/partners-and-initiatives/cbo/cbo-menu.partial.html'
	}
}]);