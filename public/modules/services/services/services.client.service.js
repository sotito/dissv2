'use strict';

angular.module('services').factory('Services', ['$resource',
	function($resource) {
		// Services service logic
		return $resource('services/:serviceId', { serviceId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);