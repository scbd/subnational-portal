require('app').controller('ResourcesPageController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.controller = "ResourcesPageController";

	$rootScope.homePage = false;
	$rootScope.portal = 'resources';
	$rootScope.navigation = [
	//		{ url: '/subnational/resources/decisions'        			, title: 'Decisions' },
	//		{ url: '/subnational/resources/strategies-and-action-plans'	, title: 'Strategies and Action Plans' },
	//		{ url: '/subnational/resources/documents'        			, title: 'Documents' },
	//		{ url: '/subnational/resources/case-studies'        			, title: 'Case Studies' },
	//		{ url: '/subnational/partners-and-initiatives/cbo'        		, title: 'CBO' },
	//		{ url: '/subnational/resources/additional-information'       , title: 'Additional Information'}
		];
}]);
