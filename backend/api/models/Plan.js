const mongoose = require('mongoose');
const planSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {		
    type: String,		
    trim: true,		
    lowercase: true,		
  },
  content: {
    type: String,
    trim: true,
    lowercase:true
  },
  updatedAt: Date
})

module.exports = mongoose.model('Plan', planSchema);
