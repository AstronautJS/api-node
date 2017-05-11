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
});

var modelAccount = mongoose.model('Account', AccountSchema);

module.exports = modelAccount;