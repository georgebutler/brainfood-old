const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/', function (req, res, next) {
  // const User = mongoose.model('Blog', userSchema)
})

router.post('/', function (req, res, next) {
  const user = new User({ email: req.body.email })

  User.register(user, req.body.password)
    .then((newUser) => {
      return res.status(201).json(newUser)
    })
    .catch(function (error) {
      console.error(error)
      return res.status(400).json(error)
    })
})

module.exports = router
