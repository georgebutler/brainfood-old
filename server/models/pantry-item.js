const mongoose = require('mongoose')

const PantryItemSchema = new mongoose.Schema({
  name: String,
  pantry: {
    type: mongoose.Schema.ObjectId,
    ref: 'Pantry'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('PantryItem', PantryItemSchema)
