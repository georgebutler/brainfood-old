const express = require('express')
const passport = require('passport')
const router = express.Router()

const Pantry = require('../models/pantry')
const User = require('../models/user')
const util = require('../plugins/util')

router.post('/', passport.authenticate('jwt', { session: false }, undefined), (req, res) => {
  const name = req.body.name
  const decoded = util.getUserFromToken(req.headers)

  if (name) {
    if (decoded) {
      User.findById(decoded._id, function (err, user) {
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'Unable to create Pantry.'
          })
        } else {
          Pantry.create({ name: name, owner: user }, function (err, pantry) {
            if (err) {
              return res.status(500).json({
                success: false,
                message: 'Unable to create Pantry.'
              })
            } else {
              pantry.owner.id = user._id
              pantry.save()

              user.pantries.push(pantry)
              user.save()

              return res.status(201).json(pantry)
            }
          })
        }
      })
    } else {
      return res.status(401).json({
        success: false,
        message: 'Not authorized'
      })
    }
  } else {
    return res.status(400).json({
      success: false,
      message: 'Name is required.'
    })
  }
})

module.exports = router
