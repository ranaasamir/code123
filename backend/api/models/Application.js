const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema ({
  fullname: {
     type: String,
     required: true,
     trim: true,
     unique: true
   },
    phone: {
       type: String,
       required: false,
       trim: true
     },
     city: {
        type: String,
        required: true,
        trim: true
      },
      experienceyrs: {
        type: Number,
        required: true,
        trim: true
      },
      birthdate: {
         type: Date,
         required: false,
         trim: true
       },
       email: {
          type: String,
          required: true,
          trim: true
        }

});

mongoose.model('Application', applicationSchema);
