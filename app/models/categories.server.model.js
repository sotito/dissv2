'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Categories Schema
 */
var CategoriesSchema = new Schema({
	
	created: {
		type: Date,
		default: Date.now
	},
	description: {
		type: String,
		default: ''
	},
	name: {
		type: String,
		default: ''
	}

});

mongoose.model('Categories', CategoriesSchema);