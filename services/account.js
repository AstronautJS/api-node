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

AccountService.alter = (data) => {
	var newObj = new Account(data);
	return CRUD.update(newObj)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;

};

AccountService.remove = () => {
	var newObj = new Account(data);
	return CRUD.update(newObj)
	.then((success) => {
		return success;
	})
	.catch((error) => {
		return error;
	})
	;

};

module.exports = AccountService;
