const mongoose = require('mongoose')
const mocha = require('mocha')

const { before } = mocha

before((done) => {
  mongoose.connect(process.env.DB_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  done()
})

/*
after((done) => {
  mongoose.connection.close()
  done()
})
 */
