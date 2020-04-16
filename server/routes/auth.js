const debug = require('debug')('brainfood:auth')
const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const User = require('../models/user')

router.post('/register', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const name = req.body.name

  const user = new User({
    email: email,
    password: password,
    name: name
  })

  user.save().then(function (newUser) {
    const token = jwt.sign(newUser.toJSON(), process.env.SECRET, { expiresIn: 604800 })
    return res.status(201).json({
      token: `JWT ${token}`
    })
  }).catch(function (error) {
    debug(error)
    return res.status(400).json({
      code: 'error/not-unique'
    })
  })
})

router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({
    email: email
  }).then(function (user) {
    if (!user) {
      return res.status(400).json({
        code: 'error/not-authorized'
      })
    }

    user.comparePassword(password, function (err, isMatch) {
      if (err || !isMatch) {
        return res.status(400).json({
          code: 'error/not-authorized'
        })
      } else {
        const token = jwt.sign(user.toJSON(), process.env.SECRET, { expiresIn: 604800 })
        return res.status(200).json({
          token: `JWT ${token}`
        })
      }
    })
  }).catch(function (error) {
    debug(error)
    return res.status(500).json({
      code: 'error/generic'
    })
  }).select('+password')
})

module.exports = router
