const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const User = require('../models/user')

router.post('/register', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const name = req.body.name

  if (!email || !password || !name) {
    return res.status(400).json({ success: false, message: 'Email, Name and Password are required.' })
  }

  const user = new User({
    email: email,
    name: name,
    password: password
  })

  user.save(function (err) {
    if (err) {
      return res.json({ success: false, message: 'Email already exists.' })
    }

    return res.json({ success: true, message: 'Successfully created new user.' })
  })
})

router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and Password are required.' })
  }

  User.findOne({
    email: email
  }, function (err, user) {
    if (err) {
      return res.status(500).json({ success: false, message: 'Something went wrong.' })
    }

    if (!user) {
      return res.status(400).json({ success: false, message: 'Email or password are incorrect.' })
    }

    user.comparePassword(password, function (err, isMatch) {
      if (err || !isMatch) {
        return res.status(400).json({ success: false, message: 'Email or password are incorrect.' })
      }

      const token = jwt.sign(user.toJSON(), process.env.SECRET, { expiresIn: 604800 })
      return res.status(200).json({ success: true, token: 'JWT ' + token })
    })
  })
})

router.get('/logout', (req, res) => {
  req.logout()
  res.status(200).json({ success: true, message: 'Successfully logged out.' })
})

module.exports = router
