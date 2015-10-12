'use strict';

module.exports = function(app) {
	var services = require('../../app/controllers/services.server.controller');

	app.route('/services')
	.get(services.list);
};