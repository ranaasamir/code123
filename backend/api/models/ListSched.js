const mongoose = require('mongoose');
const listSchedSchema = mongoose.Schema({
  teacherName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  createdAt: {
    type: String,
    required: true,
    trim: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  sun: {
    type: String,
    trim: true,
    lowercase: true
  },
   mon: {
    type: String,
    trim: true,
    lowercase: true
  },
   tue: {
    type: String,
    trim: true,
    lowercase: true
  },
   wed: {
    type: String,
    trim: true,
    lowercase: true
  },
   thu: {
    type: String,
    trim: true,
    lowercase: true
  },
   sat: {
    type: String,
    trim: true,
    lowercase: true
  },
  slot: {
    type: String,
    trim: true,
    lowercase: true,
    required: true
  }
})

module.exports = mongoose.model('ListSchedules', listSchedSchema);
