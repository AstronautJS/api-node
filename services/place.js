'use strict';

const utils = loadedModule('utils');
const Place = loadedModule('model/Place');
var ObjectId = require('mongoose').Types.ObjectId;
const CRUD = utils.crud;
const PlaceService = {};

PlaceService.list = (seek) => {
	let data = {
		model : Place,
		seek : {category: ObjectId(seek.category)}
	};
	return CRUD.list(data)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;
};

PlaceService.insert = (data) => {
	var newObj = new Place(data);
	return CRUD.add(newObj)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;
};

PlaceService.alter = (param) => {
	let data = {
		model: Place,
		data: param
	};
	return CRUD.update(data)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;

};

PlaceService.remove = (param) => {
	let data = {
		model: Place,
		data: param
	};
	return CRUD.remove(newObj)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;

};

module.exports = PlaceService;
