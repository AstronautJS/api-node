'use strict';
const mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
	name: String,
	picture: String
});

var modelCategory = mongoose.model('Category', CategorySchema);

module.exports = modelCategory;