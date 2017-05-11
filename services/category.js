'use strict';

const utils = loadedModule('utils');
const Category = loadedModule('model/Category');

const CRUD = utils.crud;
const CategoryService = {};

CategoryService.list = (seek) => {
	let data = {
		model : Category,
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

CategoryService.insert = (data) => {
	var newObj = new Category(data);
	return CRUD.add(newObj)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;
};

CategoryService.alter = (data) => {
	var newObj = new Category(data);
	return CRUD.update(newObj)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;

};

CategoryService.remove = () => {
	var newObj = new Category(data);
	return CRUD.update(newObj)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;

};

module.exports = CategoryService;
