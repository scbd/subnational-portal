
require('app').controller('GetInvolvePageController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.controller = 'GetInvolvePageController';

	$rootScope.homePage = false;
	$rootScope.portal = 'about';
	$rootScope.navigation = [
			{ url: '/about/cbd-plan-of-action', title: 'CBD Plan of Action' },
			{ url: '/about/aichi-biodiversity-targets', title: 'Aichi Biodiversity Targets' }
		];
}]);



