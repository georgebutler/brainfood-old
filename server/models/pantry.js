const mongoose = require('mongoose')

const PantrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Name is required.']
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'An owner is required.']
  },
  items: [{
    type: mongoose.Schema.ObjectId,
    ref: 'PantryItem'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Pantry', PantrySchema)
