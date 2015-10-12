'use strict';

//Setting up route
angular.module('services').config(['$stateProvider',
	function($stateProvider) {
		// Services state routing
		$stateProvider.
		state('create-services', {
			url: '/create-services',
			templateUrl: 'modules/services/views/create-services.client.view.html'
		}).
		state('services', {
			url: '/services',
			templateUrl: 'modules/services/views/services.client.view.html'
		});
	}
]);