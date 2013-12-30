define(['app'], function (app) {
	'use strict';

	app.controller('TemplateController', ['$scope', function ($scope) {

    	$scope.controller = "TemplateController";

    	_loadCss('/app/libs/font-awesome/css/font-awesome.css');
        _loadCss('//fast.fonts.net/cssapi/ab363dc0-d9f9-4148-a52d-4dca15df47ba.css');

	}]);

	function _loadCss(url) {
	    var link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = url;
	    document.getElementsByTagName("head")[0].appendChild(link);
	}
});