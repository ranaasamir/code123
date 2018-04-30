const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
  teacherusername: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  studentusername: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
});

mongoose.model('Request', requestSchema);
