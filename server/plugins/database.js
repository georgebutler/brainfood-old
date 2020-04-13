const debug = require('debug')('brainfood:database')
const mongoose = require('mongoose')
const Bluebird = require('bluebird')

mongoose.Promise = Bluebird

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
})

mongoose.connection.on('error', function (error) {
  debug(error)
})

mongoose.connection.once('open', function () {
  debug('successfully connected.')
})

module.exports = mongoose.connection
