const express = require('express')
const passport = require('passport')
const router = express.Router()

const User = require('../models/user')

router.get('/', passport.authenticate('jwt', { session: false }, undefined), (req, res, next) => {
  res.status(200).json({ user: req.user })
})

router.get('/:id', function (req, res) {
  User.findOne({
    _id: req.params.id
  }, '_id', function (err, user) {
    if (err) {
      return res.status(400).json(err)
    }

    if (user) {
      return res.status(200).json(user)
    } else {
      return res.status(400).json({ success: false, message: 'That user could not be found.' })
    }
  })
})

module.exports = router
