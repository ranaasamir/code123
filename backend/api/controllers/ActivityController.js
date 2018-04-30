const mongoose = require('mongoose');
moment = require('moment');
Validations = require('../utils/Validations');
Encryption = require('../utils/Encryption');
var Activity = require('../models/Activities');

// Define the functions of adding Activities

module.exports.createAddAct = async (req, res) => {
  const valid =
    req.body.title &&
    Validations.isString(req.body.title) &&
    !Validations.isNull(req.body.title)
    req.body.description &&
    Validations.isString(req.body.description) &&
    !Validations.isString(req.body.description);
//Validations that check that the input of content, description, and name are correctly entered
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'Title and description are required fields.',
      data: null
    });
  }
  delete req.body.createdAt;
  delete req.body.updatedAt;

  const addAct = await Activity.create(req.body);
  return res.status(200).json({
    err: null,
    msg: 'Activiy is created successfully.',
    data: addAct
  });

};

module.exports.getAddAct = async (req, res) => {
  const addAct = await Activity.get({}).exec();
  res.status(213).json({
    err: null,
    msg: 'Activiy retrieved successfully.',
    data: addAct
  });
};

module.exports.updateAddAct = async (req, res) => {
  const addAct = await Activity.patch({}).exec();
  res.status(215).json({
    err: null,
    msg: 'Activiy information updated successfully.',
    data: addAct
  });
};

// Define the functions of registering to Activities

module.exports.createActReg = async (req, res) => {
  const valid =
    req.body.username &&
    Validations.isString(req.body.username) &&
    !Validations.isNull(req.body.username) &&
    req.body.childName
    Validations.isString(req.body.childName) &&
    !Validations.isNull(req.body.childName) &&
    req.body.parentName
    Validations.isString(req.body.parentName) &&
    !Validations.isNull(req.body.parentName)
    req.body.parentNumber
    Validations.isString(req.body.parentNumber) &&
    !Validations.isNull(req.body.parentNumber)
    req.body.age
    Validations.isString(req.body.age) &&
    !Validations.isNull(req.body.age) &&
    req.body.class
    Validations.isString(req.body.class) &&
    !Validations.isNull(req.body.class);
//Validations that check that the input of content, description, and name are correctly entered
  if (!valid) {
  return res.status(400).json({
    err: null,
    msg: 'Please fill all the required fields.',
    data: actReg
  });
  }
  delete req.body.createdAt;
  delete req.body.updatedAt;

  const actReg = await Activity.create(req.body);
  return res.status(200).json({
    err: null,
    msg: 'Activiy Registeration created successfully.',
    data: actReg
  });

};

module.exports.getActReg = async (req, res) => {
  const actReg = await Activity.get({}).exec();
  res.status(213).json({
    err: null,
    msg: 'Activiy Registeration retrieved successfully.',
    data: actReg
  });
};

module.exports.updateActReg = async (req, res) => {
  const actReg = await Activity.patch({}).exec();
  res.status(215).json({
    err: null,
    msg: 'Activiy Registeration information updated successfully.',
    data: actReg
  });
};

// Define the functions of showing interests in Activities

module.exports.createInterest = async (req, res) => {
  const valid =
    req.body.interest &&
    Validations.isBoolean(req.body.interest);
  if (!valid) {
  return res.status(400).json({
    err: null,
    msg: 'Please fill the required field.',
    data: int
  });
  }
  delete req.body.createdAt;
  delete req.body.updatedAt;

  const int = await Activity.create(req.body);
  return res.status(200).json({
    err: null,
    msg: 'Interest is created successfully.',
    data: int
  });

};

module.exports.getInterest = async (req, res) => {
  const int = await Activity.get({}).exec();
  res.status(213).json({
    err: null,
    msg: 'Interest is retrieved successfully.',
    data: int
  });
};

// Define the functions of adding reviews to Activities

module.exports.createReview = async (req, res) => {
  const valid =
    req.body.review &&
    Validations.isString(req.body.review) &&
    !Validations.isNull(req.body.review)
    req.body.reviewer &&
    Validations.isString(req.body.reviewer) &&
    !Validations.isNull(req.body.reviewer);
  if (!valid) {
  return res.status(400).json({
    err: null,
    msg: 'Please fill the required field.',
    data: rev
  });
  }
  delete req.body.createdAt;
  delete req.body.updatedAt;

  const rev = await Activity.create(req.body);
  return res.status(200).json({
    err: null,
    msg: 'Review is created successfully.',
    data: rev
  });

};

module.exports.getReview = async (req, res) => {
  const rev = await Activity.get({}).exec();
  res.status(213).json({
    err: null,
    msg: 'Review is retrieved successfully.',
    data: rev
  });
};

module.exports.updateReview = async (req, res) => {
  const rev = await Activity.patch({}).exec();
  res.status(215).json({
    err: null,
    msg: 'Review is updated successfully.',
    data: rev
  });
};
