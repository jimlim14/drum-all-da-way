const mongoose = require('./index');
const { appointmentSchema } = require('./appointment-model');

const instructorSchema = new mongoose.Schema({
	name: String,
	experience: Number,
	description: String,
	quote: String,
	cost: Number,
	category: [String],
	appointment: [appointmentSchema],
});

const Instructor = mongoose.model('instructors', instructorSchema);

module.exports = Instructor;
