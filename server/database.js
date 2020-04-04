const debug = require('debug')('brainfood:database')
const mongoose = require('mongoose')

async function connect () {
  await mongoose.connect(process.env.DB_URI, {
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
}

module.exports = connect()
