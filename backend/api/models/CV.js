const mongoose = require('mongoose');
const CVschema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('CV', CVschema);
