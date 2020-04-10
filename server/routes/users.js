const express = require('express')
const passport = require('passport')
const router = express.Router()

const User = require('../models/user')

function getToken (headers) {
  if (headers && headers.authorization) {
    const parted = headers.authorization.split(' ')

    if (parted.length === 2) {
      return parted[1]
    } else {
      return null
    }
  } else {
    return null
  }
}

router.get('/', passport.authenticate('jwt', { session: false }, undefined), (req, res, next) => {
  const token = getToken(req.headers)

  if (token) {
    User.find(function (err, users) {
      if (err) {
        return res.status(500).json(err)
      } else {
        return res.status(200).json(users)
      }
    })
  } else {
    return res.status(403).json({ success: false, message: 'not authorized' })
  }
})

router.get('/:id', passport.authenticate('jwt', { session: false }, undefined), function (req, res) {
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
