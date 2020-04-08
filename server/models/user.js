const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, 'A password is required.']
  },
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

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback)
}

module.exports.getUserByEmail = function (email, callback) {
  const query = { email: email }

  User.findById(query, callback)
}

module.exports.registerUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      throw err
    }

    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) {
        throw err
      }

      newUser.password = hash
      newUser.save(callback)
    })
  })
}

module.exports.comparePassword = function (canidatePassword, hash, callback) {
  bcrypt.compare(canidatePassword, hash, (err, isMatch) => {
    if (err) {
      throw err
    }

    callback(null, isMatch)
  })
}
