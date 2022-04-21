const Instructor = require('../model/model');

const getInstructors = async (req, res) => {
  try {
    console.log('get work');
    res.status(200);
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch (e) {
    res.status(500);
    console.error(e);
  }
};

const postInstructor = async (req, res) => {
  try {
    console.log('post work')
    res.status(201);
    const {name, experience, description, quote, cost, category} = req.body; 
    const instructor = await new Instructor({name, experience, description, quote, cost, category}); 
    instructor.save();
    res.json(instructor);
  } catch (e) {
    res.status(500);
    console.error(e);
  }
};

module.exports = {getInstructors, postInstructor};