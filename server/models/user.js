const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: {
    first: String,
    last: String
  },
  pantries: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Pantry'
  }]
})

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  passwordField: 'password'
})

module.exports = mongoose.model('User', UserSchema)
