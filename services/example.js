'use strict';

const utils = loadedModule('utils');
const Jam = loadedModule('model/Example');

const CRUD = utils.crud;
const SERVJAM = {};

SERVJAM.list = (seek) => {
	let data = {
		model : Jam,
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

SERVJAM.insert = (data) => {
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

SERVJAM.alter = (data) => {
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

SERVJAM.remove = () => {
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

module.exports = SERVJAM;