const Instructor = require('../model/instructor-model');
const {Appointment} = require('../model/appointment-model');

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
    console.log('post work')
    res.status(201);
    const {name, experience, description, quote, cost, category, appointment} = req.body; 
    const instructor = await new Instructor({name, experience, description, quote, cost, category, appointment}); 
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
}

const postAppointment = async (req, res) => {
  try {
    res.status(201);
		const {name, start, instructor} = req.body;
		const appointment = await new Appointment({ name, start, instructor });
		appointment.save();
		res.json(appointment);
  } catch (e) {
    res.status(500);
    console.error('something is wrong with postAppointment route', e);
  }
}

module.exports = {getInstructors, postInstructor, getAppointments, postAppointment};