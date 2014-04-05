require('app').controller('AboutPageController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.controller = 'AboutPageController';

	$rootScope.homePage = false;
	$rootScope.portal = 'home';
	$rootScope.navigation = [
			{ url: '/subnational/about', 							title: 'About' },
			{ url: '/subnational/about/cbd-plan-of-action', 			title: 'CBD Plan of Action' },
			{ url: '/subnational/about/aichi-biodiversity-targets',  title: 'Aichi Biodiversity Targets' },
			{ url: '/subnational/get-involved', 						title: 'Get Involved' },
			{ url: '/subnational/guidelines', 						title: 'Guidelines' }
		];
}]);



