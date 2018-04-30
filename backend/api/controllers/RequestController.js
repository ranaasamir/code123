const mongoose = require('mongoose'),
Validations = require('../utils/Validations'),
Request = mongoose.model('Request');

// get requests
module.exports.getRequests = async(req, res) => {
  // check user name of teacher provided and valid
  var valid =
  req.params.teacherusername &&
  Validations.isString(req.params.teacherusername);
  // return error when not found
  if(!valid) {
    return res.status(422).json({
      err: null,
      msg: 'teacherusername required',
      data: null
    });
  }
  // get requests from database
  const requests = await Request.find({
    teacherusername: req.params.teacherusername
  }).exec();
  // return response with requests in data
  res.status(200).json({
    err: null,
    msg:
      'requests retrieved successfully.',
    data: requests
  });
};
