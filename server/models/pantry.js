const mongoose = require('mongoose')

const PantrySchema = new mongoose.Schema({
  name: String,
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  items: [{ type: mongoose.Schema.ObjectId, ref: 'PantryItem' }]
})

module.exports = mongoose.model('Pantry', PantrySchema)
