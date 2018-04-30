const mongoose = require('mongoose');
moment = require('moment');
Validations = require('../utils/Validations');
Encryption = require('../utils/Encryption');
var Plan = require('../models/Plan');
//The user enters the name, description, content of the plan he wants to create
module.exports.createPlan = async (req, res) => {
// checks that the input entered are valid Strings
if (!Validations.isString(req.body.name) || !Validations.isString(req.body.description)
|| !Validations.isString(req.body.content)) {
  return res.status(422).json({
    err: null,
    msg: 'name, description and Content of Plan are required fields',
    data: null
  });
}
//Deleting the time of creation and update in case the user enters them, they should be automatically entered by system
delete req.body.createdAt;
delete req.body.updatedAt;
// checks if the plan name the user wants to create is already taken, since names should be unique
Plan.findOne({
  name: req.body.name.trim().toLowerCase()
}).exec(function(err, plan) {
  // If an err occurred, call the next middleware in the app.js which is the error handler
  if (err) {
    return next(err);
  }
  // If there is a plan with this name user should be informed to change name, as names must be unique
  if (plan) {
    return res.status(422).json({
      err: null,
      msg:
        'A plan with this exact name already exists, please choose another name',
      data: null
    });
  };
});
//if the name and all fields are entered correctly the plan can now be created.
const plan = await Plan.create(req.body);
return res.status(201).json({
  err: null,
  msg: 'Your new plan was created successfully.',
  data: plan
});
};
//truncates all collection
module.exports.delete = async (req, res) => {
  const plans = await Plan.remove({}).exec();
  res.status(200).json({
    err: null,
    msg: 'Plans deleted successfully.',
    data: plans
  });
};
//Views all the plans available in the database
module.exports.getPlans = async (req, res) => {
  const plans = await Plan.find({}).exec();
  res.status(200).json({
    err: null,
    msg: 'Plans retrieved successfully.',
    data: plans
  });
};
//The Users here can update their plans only, they can change description or content of plan
module.exports.updatePlan = async (req, res) => {
  const valid =
    req.body.name &&
    Validations.isString(req.body.name) ||
    req.body.content &&
    Validations.isString(req.body.content) ||
    req.body.description &&
    Validations.isString(req.body.description);
//Validations that check that the input of content, description, and name are correctly entered
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name, content or description are required fields.',
      data: null
    });
  }
//This updates automatically the timing of the update without the user entering it
  req.body.updatedAt = moment().toDate();
// this checks if user is the creator of the plan he wants to update
  const updatedPlan = await Plan.findOneAndUpdate({name: req.params.name, createdBy: req.body.createdBy},
    {
      $set: req.body
    },
    { new: true }
  ).exec();
//if user is not the creator of plan he can not edit it and the abovee message shows
  if (!updatedPlan) {
    return res
      .status(404)
      .json({ err: null, msg: 'Plan is either not found or you are not the creator of the plan.', data: null });
  }
//if the user is the creator of the plan the plan is updated and  new plan's info is showed
  res.status(200).json({
    err: null,
    msg: 'Your Plan was updated successfully.',
    data: updatedPlan
  });
};
//this returns a certain plan searched by name, used in the update plan in frontend
//Checks if plan exists , if exists all its data is returned to user
module.exports.getPlan = async (req, res) => {
  const plan = await Plan.findOne({name: req.params.name}).exec();
if (!plan) {
  return res
    .status(404)
    .json({ err: null, msg: 'Plan not found.', data: null });
}
res.status(200).json({
  err: null,
  msg: 'Plan retrieved successfully.',
  data: plan
});
}
