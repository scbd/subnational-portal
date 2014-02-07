require('app').controller('IndexController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.controller = "IndexController";

	$rootScope.homePage = true;
	$rootScope.portal = 'home';
	$rootScope.navigation = [
			{ url: '/about', 							title: 'About' },
			{ url: '/about/cbd-plan-of-action', 		title: 'CBD Plan of Action' },
			{ url: '/about/aichi-biodiversity-targets', title: 'Aichi Biodiversity Targets' },
			{ url: '/get-involved', 					title: 'Get Involved' },
			{ url: '/guidelines', 						title: 'Guidelines' }
		];
}]);