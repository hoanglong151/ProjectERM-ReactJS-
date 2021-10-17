const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Doctors = new Schema({
  name: String,
  position: String,
  experience: String,
  description: String,
  avatar: String,
});

module.exports = mongoose.model("Doctors", Doctors);