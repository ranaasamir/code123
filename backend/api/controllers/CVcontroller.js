const mongoose = require('mongoose'),
moment = require('moment'),
CV = mongoose.model('CV');
Validations = require('../utils/Validations'),

module.exports.getCV= async (req, res) => {  //method for getting the CV from the database
  const cv = await CV.find({}).exec();
  res.status(200).json({
    err: null,
    msg: 'CV retrieved successfully.',
    data: cv
  });
};
  // method for inserting the users that uploaded ther CV using multer
  module.exports.createCV = async (req, res) => {
    const valid =
      req.body.userId &&
      Validations.isString(req.body.userId) &&
      req.body.name &&
      Validations.isString(req.body.name);
    if (!valid) {
      return res.status(422).json({
        err: null,
        msg: 'day(String) and slot(Number) are required fields.',
        data: null
      });
    }
    const cv = await CV.create(req.body);
    res.status(201).json({
      err: null,
      msg: 'CV was created successfully.',
      data: cv
    });
  };
  // deleting or rejecting the CV
  module.exports.deleteCV = async (req, res) => {
  if (!Validations.isObjectId(req.params.userid)) {
    return res.status(422).json({
      err: null,
      msg: ' userid is not valid',
      data: null
    });
  }
  const deleteCV= await CV.findByIdAndRemove(
    req.params.userid
  ).exec();
  if (!deleteCV) {
    return res
      .status(404)
      .json({ err: null, msg: 'CV not found.', data: null });
  }
  res.status(200).json({
    err: null,
    msg: 'CV was deleted successfully.',
    data: deleteCV
  });
};
