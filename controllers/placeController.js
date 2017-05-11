'use strict';
var PlaceService = loadedModule('services/place');
var PlaceController = {};

PlaceController.list = (req, res) => {
	PlaceService.list({category: req.params.category})
	.then(success => res.status(200).json(success))
	.catch(err => res.status(400).send(err));
};
PlaceController.insert = (req, res) => {
	PlaceService.insert(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};
PlaceController.alter = (req, res) => {
	PlaceService.alter(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};
PlaceController.remove = (req, res) => {
	PlaceService.remove(req.body)
	.then(success => res.status(201).json(success))
	.catch(err => res.status(400).send(err));
};

module.exports = PlaceController;
