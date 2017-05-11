'use strict';
const mongoose = require('mongoose');

var PlaceSchema = mongoose.Schema({
	name: String,
	description: String,
	category: {
		type: mongoose.Schema.ObjectId,
		ref: 'Category'
	},
	address: String,
	phone: String,
	picture: String
});

var modelPlace = mongoose.model('Place', PlaceSchema, 'Place');

module.exports = modelPlace;
