var nodemailer = require('nodemailer');

// setting GMail credentials
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nawwarbi18se@gmail.com',
    pass: 'MsdmvQ6S7tgDRG5y'
  }
});

// method to be called by other pages for sending emails
module.exports.sendEmail = (toemail,text) => {
  // setting variables needed to send email
  var mailOptions = {
  from: 'nawwarbi18se@gmail.com',
  to: toemail,
  subject: 'Welcome to Nawwar',
  html: '<h1>Welcome</h1><p>That was easy!</p>'+text
};
if(process.env.NODE_ENV!='test'){
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      //logging SMTP errors
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
};
