const mongoose = require('mongoose');
const articleSchema = mongoose.Schema({
  Name: {
    type: String,
    trim: true,
    lowercase: true
  },
  Dates: {
    type: Date,
    default: Date.now
  },
  Content: {
    type: String,
    trim: true,
    lowercase: true
  },
  Author: {
    type: String,
    trim: true,
    lowercase: true
  },
  Comments: {
    type: String,
    trim: true,
    lowercase: true
  }

});
mongoose.model('Article', articleSchema);
