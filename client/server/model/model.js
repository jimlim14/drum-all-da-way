const mongoose = require('./index');

const instructorSchema = new mongoose.Schema({
  name: String,
  experience: Number,
  description: String,
  quote: String,
  cost: Number,
  category: [String]
});

const Instructor = mongoose.model('instructors', instructorSchema);

module.exports = Instructor;