const express = require('express')
const passport = require('passport')
const router = express.Router()

const Pantry = require('../models/pantry')
const util = require('../plugins/util')

router.post('/', passport.authenticate('jwt', { session: false }, undefined), (req, res) => {
  const user = util.getUserFromToken(req.headers)
  const name = req.body.name

  if (name) {
    if (user) {
      const pantry = new Pantry({
        name: name,
        owner: user
      })

      pantry.save(function (err, newPantry) {
        if (err) {
          return res.status(400).json({
            success: false,
            message: 'Unable to create Pantry.'
          })
        } else {
          return res.status(200).json(newPantry)
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
