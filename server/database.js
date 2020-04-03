const debug = require('debug')('brainfood:database')
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const db = mongoose.connection

db.on('error', function (error) {
  debug(error)
})

db.once('open', function () {
  debug('successfully connected.')
})

module.exports = db
