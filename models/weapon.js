const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weaponSchema = new Schema(
	{
		name: String,
		requiredLevel: Number,
		pictureUrl: String,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Weapon', weaponSchema);
