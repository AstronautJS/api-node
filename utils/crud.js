'use strict';

var ObjectId = require('mongoose').Types.ObjectId;
const CRUD = {};

CRUD.add = (param) => {
	return new Promise((resolve, reject) => {
		param.save((err, data) => {
			if(err){
				var ex = 'Mongoose not insert ' + err;
				reject(ex);
			}
			resolve(data);			
		});
	});
};

CRUD.list = (param) => {
	return new Promise((resolve, reject) => {
		param.model
		.find(param.seek)
		.exec((err, data) => {
			if(err){
				var ex = 'Mongoose not list ' + err;
				reject(ex);
			}
			resolve(data);
		})
	});
};

CRUD.listLast = (param) => {
	return new Promise((resolve, reject) => {
		param.model
		.find(param.seek)
		.limit(param.limit)
		.sort({$natural:-1})
		.exec((err, data) => {
			if(err){
				var ex = 'Mongoose not list last ' + err;
				reject(ex);
			}
			resolve(data);
		})
	});
};

CRUD.listAll = (param) => {
	return new Promise((resolve, reject) => {
		param.model
		.find(param.seek)
		.skip(param.limit * (para.page - 1))
		.limit(param.limit)
		.exec((err, data) => {
			if(err){
				var ex = 'Mongoose not list all ' + err;
				reject(ex);
			}
			resolve(data);
		})
	}); 
};

CRUD.update = (param) => {
	return new Promise((resolve, reject) => {
		param.data._id = ObjectId(param._id);
		param.model
		.update(param.data._id, param.data,{upsert: false}, (err, data) => {
			if(err){
				var ex = 'Mongoose not update ' + err;
				reject(ex);
			}
			resolve(data);
		});
	});
};

CRUD.remove = (param) => {
	return new Promise((resolve, reject) => {
		param.model
		.remove(param.data, (err, data) => {
			if(err){
				var ex = 'Mongoose not remove ' + err;
				reject(ex);
			}
			resolve(data);
		});
	});
};

module.exports = CRUD;