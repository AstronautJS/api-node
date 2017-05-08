'use strict';
const mongoose = require('mongoose');

var Jam = mongoose.Schema({
	name: String,
	stars: Number
});

var modelJam = mongoose.model('exampleJam', Jam, 'exampleJam');

module.exports = modelJam;