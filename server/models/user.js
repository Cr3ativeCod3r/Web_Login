const { mongoose, Schema } = require('mongoose');

const userSchema = new Schema({
	name: String,
	email: {
		type: String,
		unique: true,
	},
	password: String,
});

module.exports = mongoose.model('User', userSchema);