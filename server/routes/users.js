const express = require('express')
// const passport = require('passport')
const router = express.Router()

const User = require('../models/user')

router.get('/', function (req, res, next) {
  // const User = mongoose.model('Blog', userSchema)
})

router.post('/', function (req, res, next) {
  const user = new User({ email: req.body.email })

  User.register(user, req.body.password)
    .then((newUser) => {
      return res.json(newUser)
    })
    .catch(function (error) {
      console.error(error)
      return res.json(error)
    })
})

module.exports = router
