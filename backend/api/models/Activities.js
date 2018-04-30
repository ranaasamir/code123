const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for adding Activities
const reviewSchema = mongoose.Schema({
  review: {
    type: String,
    required: false
  },
  reviewer: {
    type: String,
    required: true
  }
})
const participantSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  childName: {
    type: String,
    required: false
  },
  parentName: {
    type: String,
    required: false
  },
  parentNumber: {
    type: Number,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  childClass: {
    type: String,
    required: false
  }
})
const activitySchema = mongoose.Schema({
  title: {
  type: String,
  required: true,
  unique: true
  },
  description: {
    type: String,
    required: true
  },
  interest: {
    type: Boolean,
    required: false
  },
  createdAt:{
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date
  },
  participants: [participantSchema],
  interest: {
  type: Boolean,
  required: false
  },
  reviews: [reviewSchema],
  creator: {
  type: String,
  required: false,
  trim: true
}
})

module.exports = mongoose.model('Activity', activitySchema);
