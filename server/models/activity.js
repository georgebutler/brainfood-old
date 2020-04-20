const mongoose = require('mongoose')

const ActivitySchema = new mongoose.Schema({
  message: String,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Activity', ActivitySchema)
