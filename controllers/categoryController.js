'use strict';
var CategoryService = loadedModule('services/category');
var CategoryController = {};

CategoryController.list = (req, res) => {
	CategoryService.list({})
	.then(success => res.status(200).json(success))
	.catch(err => res.status(400).send(err));
	return;
};
CategoryController.insert = (req, res) => {
	CategoryService.insert(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};
CategoryController.alter = (req, res) => {
	CategoryService.alter(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};
CategoryController.remove = (req, res) => {
	CategoryService.remove(req.body)
	.then(success => res.status(200).json(success))
	.catch(err => res.status(400).send(err));
};

module.exports = CategoryController;
