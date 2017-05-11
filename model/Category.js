'use strict';
const mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
	name: String,
	picture: String
},{versionKey: false});

var modelCategory = mongoose.model('Category', CategorySchema, 'Category');

module.exports = modelCategory;
