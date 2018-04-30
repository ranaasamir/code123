const mongoose = require('mongoose');

const sessionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
          participants: {
             type: String,
             required: true,
             trim: true,
           },
           duration: {
              type: String,
              required: false,
              trim: true,
            },
            date: {
               type: Date,
               required: true,
               trim: true,
             },
             sessionName: {
                type: String,
                required: true,
                trim: true,
              },
               email: {
                  type: String,
                  required: true,
                  trim: true,
                },

});

mongoose.model('Session', sessionSchema);
