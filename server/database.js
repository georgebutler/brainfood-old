const debug = require('debug')('brainfood:database')
const mongoose = require('mongoose')

let uri = process.env.DB_URI_TEST

if (process.env.NODE_ENV === 'production') {
  uri = process.env.DB_URI
}

mongoose.Promise = global.Promise

mongoose.connect(`${uri}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

mongoose.connection.on('error', function (error) {
  debug(error)
})

mongoose.connection.once('open', function () {
  debug('successfully connected.')
})

module.exports = mongoose.connection
