const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    select: false,
    required: [true, 'A password is required.']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'An email is required.']
  },
  name: {
    type: String,
    required: [true, 'A name is required.']
  },
  pantries: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Pantry'
  }]
})

UserSchema.pre('save', function (next) {
  const user = this

  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err)
      }

      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next(err)
        }

        user.password = hash
        next()
      })
    })
  } else {
    return next()
  }
})

UserSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) {
      return callback(err)
    }

    callback(null, isMatch)
  })
}

module.exports = mongoose.model('User', UserSchema)
