'use strict';

var ObjectId = require('mongoose').Types.ObjectId;
var SchemaId = require('mongoose').Schema.ObjectId;
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
		.skip(param.limit * (param.page - 1))
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
	if(param.data._id) param.data._id = ObjectId(param.data._id);
	return new Promise((resolve, reject) => {
		param.model
		.update(param.data._id, param.data, {upsert: false}, (err, data) => {
			if(err){
				var ex = 'Mongoose not update ' + err;
				reject(ex);
			}
			resolve(data);
		});
	});
};
// db.account.update({"_id":ObjectId("59142112747ee64fb5b2f08c"),
//"visitedPlaces.place":ObjectId("5914202c747ee64fb5b2f088")}, {$inc: {"visitedPlaces.count": 1}})
CRUD.updateVisited = (param) =>{
	return new Promise((resolve, reject) => {
		param.model
		.update({
				"_id": ObjectId(param.data.id),
				"visitedPlaces.place": ObjectId(param.data.place)
			}, {$inc: {"visitedPlaces.count":1}}, (err, data) => {
			if(err){
				var ex = 'Mongoose not update ' + err;
				reject(ex);
			}
			resolve(data);
		});
	});
};

CRUD.remove = (param) => {
	if(param.data._id) param.data._id = ObjectId(param.data._id);
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
