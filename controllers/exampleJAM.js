'use strict';
var SERVJAM = loadedModule('services/example');
var CONTROLJAM = {};

CONTROLJAM.list = (req, res) => {
	SERVJAM.list({})
	.then(success => res.status(200).json(success))
	.catch(err => res.status(400).send(err));
};
CONTROLJAM.insert = (req, res) => {
	SERVJAM.insert(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};
CONTROLJAM.alter = (req, res) => {
	SERVJAM.alter(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};
CONTROLJAM.remove = (req, res) => {
	SERVJAM.remove(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};

module.exports = CONTROLJAM;