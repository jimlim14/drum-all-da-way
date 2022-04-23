const mongoose = require('./index');

const appointmentSchema = new mongoose.Schema({
  id: String,
	name: String,
  start: String,
  instructor: String
});

const Appointment = mongoose.model('appointments', appointmentSchema);

module.exports = {Appointment, appointmentSchema};
