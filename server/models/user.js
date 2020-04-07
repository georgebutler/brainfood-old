const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema({
  password: String,
  email: {
    type: String,
    required: [true, 'An email is required.']
  },
  name: {
    first: {
      type: String,
      required: [true, 'A first name is required.']
    },
    last: {
      type: String,
      required: [true, 'A last name is required.']
    }
  },
  pantries: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Pantry'
  }]
})

UserSchema.methods.findSimilarTypes = function (params, callback) {
  return this.model('Animal').find({ type: this.type }, callback)
}

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  passwordField: 'password'
})

module.exports = mongoose.model('User', UserSchema)
