require('app').controller('ResourcesPageController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.controller = "ResourcesPageController";

	$rootScope.homePage = false;
	$rootScope.portal = 'resources';
	$rootScope.navigation = [
			{ url: '/resources/decisions'        			, title: 'Decisions' },
			{ url: '/resources/strategies-and-action-plans'	, title: 'Strategies and Action Plans' },
			{ url: '/resources/documents'        			, title: 'Documents' },
			{ url: '/resources/case-studies'        		, title: 'Case Studies' },
			{ url: '/resources/presentations'        		, title: 'Presentations' },
			{ url: '/resources/additional-information'      , title: 'Additional Information'}
		];
}]);
