'use strict';

const utils = loadedModule('utils');
const Account = loadedModule('model/Account');

const CRUD = utils.crud;
const AccountService = {};

AccountService.list = (seek) => {
	let data = {
		model : Account,
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

AccountService.insert = (data) => {
	var newObj = new Account(data);
	return CRUD.add(newObj)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;
};

AccountService.alter = (param) => {
	let data = {
		model: Account,
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

AccountService.remove = (param) => {
	let data = {
		model: Account,
		data: param
	};
	return CRUD.remove(data)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;

};

module.exports = AccountService;
