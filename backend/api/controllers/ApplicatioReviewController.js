const mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  User = mongoose.model('User');
  Application = mongoose.model('Application');


module.exports.getApplication = async (req, res) => {
  if (!Validations.isObjectId(req.params.fullname)) {
    return res.status(422).json({
      err: null,
      msg: 'fullname parameter must be a valid ObjectName.',
      data: null
    });
  }
  const application = await Application.findByName(req.params.fullname).exec();
  if (!application) {
    return res
      .status(404)
      .json({ err: null, msg: 'Application not found.', data: null });
  }
  res.status(200).json({
    err: null,
    msg: 'Application retrieved successfully.',
    data: application
  });
};

module.exports.getApplications = async (req, res) => {
  const applications = await Application.find({}).exec();
  res.status(200).json({
    err: null,
    msg: 'Applications retrieved successfully.',
    data: applications
  });
};
