const mongoose = require('mongoose'),
moment = require('moment'),
Validations = require('../utils/Validations'),
Emails = require('../utils/Email'), // email library for sending emails
md5 = require('md5'); // importing MD5 to encrypt passwords
User = mongoose.model('User');


module.exports.logout = async (req, res) => {
  req.session.loggedinuser = null;
}

module.exports.checkCredentials = async (req, res) => {
  if (!Validations.isString(req.body.username) || !Validations.isString(req.body.password)) {
    return res.status(422).json({
      err: null,
      msg: 'username and password required',
      data: null
    });
  }
  req.body.password = md5(req.body.password) // encrypting password
   const users = await User.find({username: req.body.username,password:req.body.password}).exec();
   if(users.length==1){
     let usertype = '';
  User.findOne({username: req.body.username,password:req.body.password}, 'usertype', function (err, user) {
    if (err) return handleError(err);
    req.session.loggedinuser = req.body.username;
    req.session.loggedinuserid = user._id;
    req.session.usertype = user.usertype;
    req.session.save(function(err) {

    })
    res.status(200).json({
      msg: 'Valid username & password',
      usertype: user.usertype,
    });


  });
  }
   if(users.length==0){
     res.status(403).json({
       msg: 'Invalid username or password'
     });
   }

   if(users.length>1){
     res.status(500).json({
       msg: 'Duplicate users found!'
     });
   }
}

module.exports.checkAvailablity = async (req, res) => {
  // checking whether the user entered username and email or not
  if (!Validations.isString(req.body.username) || !Validations.isString(req.body.email)) {
    return res.status(422).json({
      err: null,
      msg: 'username and email required',
      data: null
    });
  }
  const users = await User.find({username: req.body.username}).exec();
  if(users.length==1){
    // informing the user that the username is already taken
    return res.status(200).json({
      err: null,
      msg: 'Username already taken',
      data: null
    });
}
  const email = await User.find({email: req.body.email}).exec();
  if(email.length==1){
    // informing the user that the email is already taken
    return res.status(200).json({
      err: null,
      msg: 'Email already taken',
      data: null
    });
  }

     res.status(200).json({
      err: null,
      msg: 'username and email are OK',
      data: null
    });
  }

module.exports.createUser = async (req, res) => {

if (!Validations.isString(req.body.username) ||
!Validations.isString(req.body.password) ||
!Validations.isString(req.body.firstname) ||
!Validations.isString(req.body.middlename) ||
!Validations.isString(req.body.lastname) ||
!Validations.isString(req.body.phone) ||
!Validations.isString(req.body.address) ||
!Validations.isString(req.body.city) ||
!Validations.isString(req.body.eduback) ||
!Validations.isDate(req.body.birthdate) ||
!Validations.isString(req.body.gender) ||
!Validations.isString(req.body.interests) ||
!Validations.isString(req.body.biography) ||
(req.body.gender!='M' && req.body.gender!='F') ||
!Validations.isEmail(req.body.email)) {
  // error in the data input, returning 422
  return res.status(422).json({
    err: 'Hi',
    msg: 'Error in data entered',
    data: null
  });
}

req.body.password = md5(req.body.password) // encrypting password

// adding user to DB and sending confrimation emaiL
const user = await User.create(req.body);
Emails.sendEmail(req.body.email,"<h1>Dear"+" "+req.body.firstname + " " + req.body.lastname+",</h1><br>We're so excited welcoming you to Nawwar<br> to verify your account click on the following link<br>http://localhost:8080/#/confirmation");
return res.status(201).json({
  err: null,
  msg: 'User was created successfully, please check your email.',
  data: user
});
};
module.exports.RegisterChild = async (req, res) => {
if(req.session.usertype!='Parent'){
  return res.status(423).json({
    err: '',
    msg: 'Only Parents are allowed to create a user for their child',
    data: null
  });
}
if (!Validations.isString(req.body.username) ||
!Validations.isString(req.body.password) ||
!Validations.isString(req.body.firstname) ||
!Validations.isString(req.body.middlename) ||
!Validations.isString(req.body.lastname) ||
!Validations.isDate(req.body.birthdate) ||
!Validations.isString(req.body.gender) ||
(req.body.gender!='M' && req.body.gender!='F') ||
!Validations.isEmail(req.body.email)) {
  // error in the data input, returning 422

  return res.status(422).json({
    err: 'Hi',
    msg: 'Error in data entered',
    data: null
  });
}
req.body.password = md5(req.body.password) // encrypting password
req.body.usertype = "Child"
req.body.ParentID = req.session.userID
// adding user to DB and sending confrimation emaiL
const user = await User.create(req.body);
Emails.sendEmail(req.body.email,"<h1>Dear"+" "+req.body.firstname + " " + req.body.lastname+",</h1><br>We're so excited welcoming you to Nawwar<br> to verify your account click on the following link<br>http://localhost:8080/#/confirmation");

return res.status(201).json({
  err: null,
  msg: 'User was created successfully, please check your email.',
  data: user
});

}
module.exports.resetPassword = async (req, res) => {
  //sending email to reset password.
  if(!Validations.isEmail(req.body.email)) {
    return res.status(200).json({
      err: 'Hi',
      msg: 'Error in data entered',
      data: null
    });
  }
  const forusers = await User.find({email: req.body.email}).exec();
  if(forusers.length==1){
  Emails.sendEmail1(req.body.email,"You are receiving this because you requested the reset of your nawwar account password" +" "+
  "Please Click on the following link to reset your password" +" "+
  "http://localhost:8080/#/Reset/" +" "+
    "If you didnt request this change please ignore this email and your password will remain unchanged");
  //EmailReset = req.body.email+token
  return res.status(201).json({
    err: null,
    msg: 'You can now reset your password please check your email.',
    data: null
  });
}
};

//updating db with new password.
module.exports.reset = async (req, res) => {
const users = await User.find({username: req.body.username}).exec();
if(!Validations.isString(req.body.username)|| !users.length==1){
  return res.status(200).json({
    err: 'Hi',
    msg: 'Error in data entered',
    data: null
  });
}
const username = req.body.username;
const newPassword = md5(req.body.password);
console.log(username)
const use = await User.find({username: req.body.username}).exec();
const user1 = await User.findOneAndUpdate({username: req.body.username},
   {$set:{password:newPassword}}, {new: true} , function(err, doc){
    return res.status(300).json({
      err: 'Hi',
      msg: 'Password successfully updated',
      data: user1
    });
});
}
module.exports.getUser = async (req, res) => {
  if(!Validations.isString(req.params.userId)){
    return res.status(422).json({
      err: null,
      msg: 'userID is required',
      data: null
    });
  }

 const user = await User.findById(req.params.userId).exec();

 res.status(200).json({
   err: null,
   msg: 'Users are retreved successfully.',
   data: user
 });

};
module.exports.updateUser = async (req, res) => {
  if (!Validations.isObjectId(req.params.Username)) {
    return res.status(422).json({
      err: null,
      msg: 'Username parameter must be a valid ObjectId.',
      data: null
    });
  }
  const valid =
    req.body.name &&
    Validations.isString(req.body.name) &&
    req.body.price &&
    Validations.isNumber(req.body.price);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'Username is a required field.',
      data: null
    });
  }

  req.body.updatedAt = moment().toDate();

  const updatedUser = await User.findByIdAndUpdate(
    req.params.Username,
    {
      $set: req.body
    },
    { new: true }
  ).exec();
  if (!updatedUser) {
    return res
      .status(404)
      .json({ err: null, msg: 'User not found.', data: null });
  }
  res.status(200).json({
    err: null,
    msg: 'User was updated successfully.',
    data: updatedUser
  });
};
