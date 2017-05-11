'use strict';
var AccountService = loadedModule('services/account');
var AccountController = {};

AccountController.list = (req, res) => {
	AccountService.list({})
	.then(success => res.status(200).json(success))
	.catch(err => res.status(400).send(err));
};
AccountController.insert = (req, res) => {
	AccountService.insert(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};
AccountController.alter = (req, res) => {
	AccountService.alter(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};
AccountController.alterVisited = (req, res) => {
	AccountService.alterVisited(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};
AccountController.remove = (req, res) => {
	AccountService.remove(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};

module.exports = AccountController;
