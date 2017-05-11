'use strict';
const mongoose = require('mongoose');

var AccountSchema = mongoose.Schema({
	username: String,
	password: String,
	visitedPlaces: [{
		place: {
			type: mongoose.Schema.ObjectId,
			ref: 'Place'
		},
		count: Number
	}]
},{versionKey: false});

var modelAccount = mongoose.model('Account', AccountSchema, 'account');

module.exports = modelAccount;
