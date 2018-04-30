var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var path = require('path');
var multer = require('multer');
var fs = require('fs');
var mime = require('mime');
var uploaded = require('../controllers/CVcontroller');
const mongoose = require('mongoose'),
CV = mongoose.model('CV');

var storage = multer.diskStorage({
  //choose file destination to save the uploaded files
   destination: function (req, file, cb) {
       cb(null, 'uploads/');
   },
   //rename the uploaded files
   filename: function (req, file, cb) {
     var user = req.session.loggedinuserid
       // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
       cb(null, user + path.extname(file.originalname));

   }
});
//init Multer
var upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
  //Front end must have the name field name 'document'
}).single('document');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext to be uploaded
  const filetypes = /pdf|doc/;
  // Check ext of file
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb(new Error('Error: PDFs Only!'));
  }
}
// Init app
const app = express();
// EJS
app.set('view engine', 'ejs');
//to post

router.post('/upload', (req, res) => {
  upload(req, res, function (err) {
    if(err){
      return res.send('Select PDF files only');
      // res.json({error: true, message: 'Select PDF files only' });

      }
     else {
      if(req.file == undefined){
        return res.send('No file selected');
        // res.json({ error: true, message: 'No file selected'});

      } else {
        return res.send('Success ! your cv was upload successfully');
        // res.json({ error: false, message: 'Success ! your cv was upload successfully'});
        // res.redirect('http://localhost:8080/#/doctor');
        }
      }
    });
  });
  // method for downloading the uploaded CV pdf files used by multer
  router.get('/download/:userid', function(req, res){
    // getting the file path
  var file = "uploads/" + req.params.userid + ".pdf"
  // getting the file and file type for download
  var filename = path.basename(file);
  var mimetype = mime.lookup(file);
  // setting the file headers
  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);
  // piping the file stream
  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

module.exports = router;
