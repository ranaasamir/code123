const mongoose = require('mongoose'),
moment = require('moment'),
Emails = require('../utils/Email'),
Psycho = mongoose.model('Psycho');
User = mongoose.model('User');

module.exports.getPsycho = async (req, res) => {
 const psycho = await User.find(req.body.usertype).exec();
 res.status(200).json({
   err: null,
   msg: 'Psychologists have been retreived successfully.',
   data: psycho
 });

};
