const debug = require('debug')('brainfood:auth')
const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const User = require('../models/user')
const responses = require('../plugins/responses')

router.post('/register', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const name = req.body.name

  if (!email) {
    return res.status(400).json(responses.missingParamError('email'))
  }

  if (!password) {
    return res.status(400).json(responses.missingParamError('password'))
  }

  if (!name) {
    return res.status(400).json(responses.missingParamError('name'))
  }

  const user = new User({
    email: email,
    password: password,
    name: name
  })

  user.save(function (err, newUser) {
    if (err) {
      debug(err)
      return res.status(400).json(responses.notUniqueError('email'))
    } else {
      const token = jwt.sign(newUser.toJSON(), process.env.SECRET, { expiresIn: 604800 })
      return res.status(201).json({
        token: `JWT ${token}`
      })
    }
  })
})

router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  if (!email) {
    return res.status(400).json(responses.missingParamError('email'))
  }

  if (!password) {
    return res.status(400).json(responses.missingParamError('password'))
  }

  User.findOne({
    email: email
  }, function (err, user) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Something went wrong.'
      })
    }

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Email or password are incorrect.'
      })
    }

    user.comparePassword(password, function (err, isMatch) {
      if (err || !isMatch) {
        return res.status(400).json({
          success: false,
          message: 'Email or password are incorrect.'
        })
      } else {
        const token = jwt.sign(user.toJSON(), process.env.SECRET, { expiresIn: 604800 })
        return res.status(200).json({
          success: true,
          token: `JWT ${token}`
        })
      }
    })
  }).select('+password')
})

router.get('/logout', (req, res) => {
  req.logout()
  res.status(200).json({
    success: true,
    message: 'Successfully logged out.'
  })
})

module.exports = router
