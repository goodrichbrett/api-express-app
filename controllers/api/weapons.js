const Weapon = require('../../models/weapon');

module.exports = {
	index,
	create,
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
