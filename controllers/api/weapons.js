const Weapon = require('../../models/weapon');

module.exports = {
	index,
	create,
	show,
	delete: deleteOne,
};

function index(req, res) {
	Weapon.find({}, (err, weapons) => {
		res.status(200).json(weapons);
	});
}

function create(req, res) {
	Weapon.create(req.body).then((weapon) => {
		res.status(201).json(weapon);
	});
}

function show(req, res) {
	Weapon.findById(req.params.id).then((weapon) => {
		res.status(200).json(weapon);
	});
}

function deleteOne(req, res) {
	Weapon.findByIdAndDelete(req.params.id).then((weapon) => {
		res.status(200).json(weapon);
	});
}
