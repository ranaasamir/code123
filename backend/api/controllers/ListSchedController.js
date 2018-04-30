const mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  ListSchedules = require('../models/ListSched');

//retrieve all data from backend related to a teacher's schedule
  module.exports.getSchedList = async (req, res) => {
  	const schedList = await ListSchedules.find({}).exec();
  	res.status(200).json({
  		err: null,
  		msg: 'List of schedules retrieved successfully.',
  		data: schedList
  	});
  };

//add the personal schedule of a teacher
  module.exports.addTeacherSched = async (req, res) => {
    //check that the name, date and timing/slot have been entered
    if(!Validations.isString(req.body.teacherName) && 
       !Validations.isString(req.body.createdAt) && 
       !Validations.isString(req.body.slot)) {
      return res.status(422).json({
    err: null,
    msg: 'Please enter the name of Teacher, the date created and the slot timing.',
    data: null
  });
    }
  // storing teacher's name and schedule/session details  
  const schedList = await ListSchedules.create(req.body);
  res.status(201).json({
    err: null,
    msg: 'Stored schedule of Teacher successfully.',
    data: schedList
  });
};
