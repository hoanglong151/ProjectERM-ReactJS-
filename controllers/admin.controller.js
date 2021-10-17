const doctorModel = require('../model/doctor.model');
const indexAdmin = async (req, res, next) => {
  try {
    await doctorModel.find({}).then(doctors => res.send(doctors));
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = {
  indexAdmin,
}