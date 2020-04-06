const mongoose = require('mongoose')
const mocha = require('mocha')

const { before, after } = mocha

before(async (done) => {
  await mongoose.connect(process.env.DB_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  done()
})

after(async (done) => {
  await mongoose.connection.close()

  done()
})
