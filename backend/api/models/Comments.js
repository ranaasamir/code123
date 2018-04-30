const mongoose = require('mongoose');
const commentsSchema = mongoose.Schema({
  articleId: {
    type: String
  },
  comment: {
    type: String,
    trim: true,
    lowercase: true
  },
  Dates: {
    type: Date,
    default: Date.now
  }
});
mongoose.model('Comments', commentsSchema);
