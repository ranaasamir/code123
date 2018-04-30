const mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  Session = mongoose.model('Session');



  module.exports.createSession =function(req, res, next) {
    var valid =
      req.body.name&&
      Validations.isString(req.body.name)&&
      req.body.participants &&
      Validations.isString(req.body.participants) &&
      req.body.duration &&
      Validations.isString(req.body.duration) &&
      req.body.date &&
      Validations.isDate(moment(req.body.date)) &&
      req.body.sessionName&&
      Validations.isString(req.body.sessionName) &&
      req.body.email &&
      Validations.isString(req.body.email);
    if (!valid) {
      return res.status(422).json({
        err: null,
        msg: 'Enter all required fields.',
        data: null
      });
    }
    // Security Check
    //delete req.body.createdAt;
    //delete req.body.updatedAt;

Session.create(req.body, function(err, session) {
 return res.status(201).json({
       err: null,
       msg: 'Session was created successfully.',
       data: null
    });
  });
};



module.exports.createProduct = async (req, res) => {
  const valid =
    req.body.name &&
    Validations.isString(req.body.name) &&
    req.body.price &&
    Validations.isNumber(req.body.price);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) and price(Number) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  delete req.body.updatedAt;

  const product = await Product.create(req.body);
  res.status(201).json({
    err: null,
    msg: 'Product was created successfully.',
    data: product
  });
};
