'use strict';

const utils = loadedModule('utils');
const Place = loadedModule('model/Place');

const CRUD = utils.crud;
const PlaceService = {};

PlaceService.list = (seek) => {
	let data = {
		model : Place,
		seek : seek
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

PlaceService.alter = (data) => {
	var newObj = new Place(data);
	return CRUD.update(newObj)
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
