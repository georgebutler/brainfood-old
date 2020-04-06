const mongoose = require('mongoose')
const mocha = require('mocha')

const { before, after } = mocha

before(async () => {
  await mongoose.connect(process.env.DB_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
})

after(async () => {
  await mongoose.connection.close()
})
