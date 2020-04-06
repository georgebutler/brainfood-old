const mongoose = require('mongoose')
const mocha = require('mocha')

const { after } = mocha

after(async () => {
  await mongoose.connection.close()
})
