const mongoose = require('mongoose');
// a schema for the psychologist and his attribuits
const PsychoSchema = mongoose.Schema({
  Firstname: {
    type: String,
    required: true,
    trim: true
  },
   Lastname: {
      type: String,
      required: true,
      trim: true,
    },
    Gender: {
      type: String,
      required: true,
      trim: true
    },
    Phonenumber: {
      type: Number,
      required: true,
      trim: true,
    },
    Adress: {
      type: String,
      required: true,
      trim: false
    }
});

mongoose.model('Psycho', PsychoSchema);
