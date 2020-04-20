const debug = require('debug')('brainfood:pantries')
const express = require('express')
const passport = require('passport')
const router = express.Router()

const Pantry = require('../models/pantry')
const User = require('../models/user')
const Activity = require('../models/activity')
const util = require('../plugins/util')

router.get('/:id', passport.authenticate('jwt', { session: false }, undefined), function (req, res) {
  const decoded = util.getUserFromToken(req.headers)
  const id = req.params.id

  if (!decoded) {
    return res.status(400).json({
      code: 'error/not-authorized'
    })
  }

  Pantry.findById(id).then(function (pantry) {
    return res.status(200).json(pantry)
  }).catch(function (error) {
    debug(error)
    return res.status(500).json({
      code: 'error/generic'
    })
  })
})

router.post('/', passport.authenticate('jwt', { session: false }, undefined), (req, res) => {
  const decoded = util.getUserFromToken(req.headers)
  const name = req.body.name

  if (!decoded) {
    return res.status(400).json({
      code: 'error/not-authorized'
    })
  }

  User.findById(decoded._id).then(function (user) {
    Pantry.create({
      name: name,
      owner: user
    }).then(function (pantry) {
      pantry.owner.id = user._id
      pantry.save()

      user.pantries.push(pantry)
      user.activities.push(Activity.create({
        message: 'Created a new Pantry.'
      }))
      user.save()

      return res.status(201).json(pantry)
    }).catch(function (error) {
      debug(error)
      return res.status(500).json({
        code: 'error/generic'
      })
    })
  }).catch(function (error) {
    debug(error)
    return res.status(500).json({
      code: 'error/generic'
    })
  })
})

module.exports = router
