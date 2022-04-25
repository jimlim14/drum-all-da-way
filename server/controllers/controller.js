const Instructor = require('../model/instructor-model');
const { Appointment } = require('../model/appointment-model');

const getInstructors = async (req, res) => {
	try {
		console.log('get work');
		res.status(200);
		const instructors = await Instructor.find();
		res.json(instructors);
	} catch (e) {
		res.status(500);
		console.error('something is wrong with getInstructors route: ', e);
	}
};

const postInstructor = async (req, res) => {
	try {
		console.log('post work');
		res.status(201);
		const {
			name,
			experience,
			description,
			quote,
			cost,
			category,
			appointment,
		} = req.body;
		const instructor = await new Instructor({
			name,
			experience,
			description,
			quote,
			cost,
			category,
			appointment,
		});
		instructor.save();
		res.json(instructor);
	} catch (e) {
		res.status(500);
		console.error(e);
	}
};

const getAppointments = async (req, res) => {
	try {
		res.status(200);
		const appointments = await Appointment.find();
		res.json(appointments);
	} catch (e) {
		res.status(500);
		console.error('something is wrong with getAppointments route', e);
	}
};

const postAppointment = async (req, res) => {
	try {
		res.status(201);
		console.log(req.body);
		const { name, start, instructor, id } = req.body;
		const appointment = await new Appointment({ name, start, instructor, id });
		appointment.save();
		res.json(appointment);
	} catch (e) {
		res.status(500);
		console.error('something is wrong with postAppointment route', e);
	}
};

const deleteAppointment = async (req, res) => {
	try {
		res.status(201);
		console.log(req.body);
		const deletedAppointment = await Appointment.findOneAndDelete({id: req.body.id});
		res.json(deletedAppointment);
	} catch (e) {
		res.status(500);
		console.error('something wrong with deleteAppointment route: ', e);
	}
};

module.exports = {
	getInstructors,
	postInstructor,
	getAppointments,
	postAppointment,
	deleteAppointment,
};
