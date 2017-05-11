'use strict';
const mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
	name: String,
	picture: String
});

var modelCategory = mongoose.model('category', CategorySchema, 'category');

module.exports = modelCategory;
