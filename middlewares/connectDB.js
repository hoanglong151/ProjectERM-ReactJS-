const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://admin:Long1511@projectemr.i1rv9.mongodb.net/projectEMR');
    console.log("Connected");
  } catch (e) {
    console.log("Failure: " + e.message);
  }
}

module.exports = connect;