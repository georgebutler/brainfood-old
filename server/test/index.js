/* eslint-disable */

const mongoose = require('mongoose')
const mocha = require('mocha')

const { before, after } = mocha

const User = require('../models/user')

before(async () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.DB_URI_TEST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    User.deleteMany({}, function () {
      console.log('Deleted all Users.')
    })

    resolve()
  })
})

after(async () => {
  return new Promise((resolve, reject) => {
    mongoose.connection.close()
    resolve()
  })
})
