const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
   password: {
      type: String,
      required: true,
      trim: true,
    },
    firstname: {
       type: String,
       required: true,
       trim: true,
     },
     middlename: {
        type: String,
        required: true,
        trim: true,
      },
     lastname: {
        type: String,
        required: true,
        trim: true,
      },
      phone: {
         type: String,
         required: false,
         trim: true,
       },
       address: {
          type: String,
          required: false,
          trim: true,
        },
         city: {
            type: String,
            required: false,
            trim: true,
          },
          eduback: {
             type: String,
             required: false,
             trim: true,
           },
           biography: {
              type: String,
              required: false,
              trim: true,
            },
            birthdate: {
               type: Date,
               required: true,
               trim: true,
             },
             gender: {
                type: String,
                required: true,
                trim: true,
              },
              interests: {
                 type: String,
                 required: false,
                 trim: true,
               },
               email: {
                  type: String,
                  required: true,
                  trim: true,
                  unique: true
                },
                usertype: {
                   type: String,
                   required: true,
                   default: 'User'
                 },
                ParentID:{
                  type: String
                }

});

mongoose.model('User', userSchema);
