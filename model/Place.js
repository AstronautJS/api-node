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
},{versionKey: false});

var modelPlace = mongoose.model('Place', PlaceSchema, 'place');

module.exports = modelPlace;
