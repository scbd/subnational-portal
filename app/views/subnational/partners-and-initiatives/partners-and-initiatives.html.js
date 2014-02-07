
require('app').controller('PartnersAndInitiativesPageController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.controller = 'PartnersAndInitiativesPageController';

	$rootScope.homePage = false;
	$rootScope.portal = 'partners-and-initiatives';
	$rootScope.navigation = [
			{ url: '/partners-and-initiatives/global-partnership', title: 'Global Partnership' },
			{ url: '/partners-and-initiatives/cbo', 			   title: 'CBO' }
		];
}]);



require('app').directive('cboMenu', [function() {
    return {
        restrict: 'EAC',
        templateUrl: '/app/views/partners-and-initiatives/cbo/cbo-menu.partial.html'
	}
}]);