const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const User = require('../models/user')

router.post('/register', (req, res) => {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password
  })

  User.registerUser(user, (err, newUser) => {
    if (err) {
      return res.json({ success: false, message: 'Failed to register' })
    }

    return res.json({ success: true, message: 'Successfully registered.' })
  })
})

router.post('/login', (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  User.getUserByEmail(email, (err, user) => {
    if (err) {
      throw err
    }

    if (!user) {
      return res.status(200).json({ success: false, message: 'That user could not be found.' })
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) {
        throw err
      }

      if (isMatch) {
        const token = jwt.sign(user, process.env.SESSION_SECRET, {
          expiresIn: 604800
        })

        res.status(200).json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          }
        })
      } else {
        return res.status(400).json({
          success: false,
          message: 'Incorrect email or password.'
        })
      }
    })
  })
})

module.exports = router
