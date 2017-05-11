'use strict';

const utils = loadedModule('utils');
const Jam = loadedModule('model/Example');

const CRUD = utils.crud;
const JamService = {};

JamService.list = (seek) => {
	let data = {};
	return CRUD.list(data)
	.then((success) => { 
		return success; 
	})
	.catch((error) => { 
		return error; 
	})
	;
};

JamService.insert = (data) => {
	var newPub = new Jam(data);
	return CRUD.add(newPub)
	.then((success) => { 
		return success; 
	})
	.catch((error) => { 
		return error; 
	})
	;
};

JamService.alter = (data) => {
	var newPub = new Jam(data);
	return CRUD.update(newPub)
	.then((success) => { 
		return success; 
	})
	.catch((error) => { 
		return error; 
	})
	;

};

JamService.remove = () => {
	var newPub = new Jam(data);
	return CRUD.update(newPub)
	.then((success) => { 
		return success; 
	})
	.catch((error) => { 
		return error; 
	})
	;

};

module.exports = JamService;