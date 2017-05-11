'use strict';
var JamService = loadedModule('services/example');
var JamController = {};

JamController.list = (req, res) => {
	JamService.list({})
	.then(success => res.status(200).json(success))
	.catch(err => res.status(400).send(err));
};
JamController.insert = (req, res) => {
	JamService.insert(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};
JamController.alter = (req, res) => {
	JamService.alter(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};
JamController.remove = (req, res) => {
	JamService.remove(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};

module.exports = JamController;