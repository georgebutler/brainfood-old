const express = require('express')
const passport = require('passport')
const router = express.Router()

const Pantry = require('../models/pantry')
const User = require('../models/user')
const util = require('../plugins/util')
const responses = require('../plugins/responses')

router.get('/:id', passport.authenticate('jwt', { session: false }, undefined), function (req, res) {
  Pantry.findById(req.params.id).then(function (pantry) {
    return res.status(200).json(pantry)
  }).catch(function (error) {
    return res.status(500).json(responses.serverError(error))
  })
})

router.post('/', passport.authenticate('jwt', { session: false }, undefined), (req, res) => {
  // Auth
  const decoded = util.getUserFromToken(req.headers)

  if (!decoded) {
    return res.status(400).json(responses.unauthorizedError())
  }

  // Params
  const name = req.body.name

  if (!name) {
    return res.status(400).json(responses.missingParamError('name'))
  }

  // Exec
  User.findById(decoded._id).then(function (user) {
    Pantry.create({
      name: name,
      owner: user
    }).then(function (pantry) {
      pantry.owner.id = user._id
      pantry.save()

      user.pantries.push(pantry)
      user.save()

      return res.status(201).json(pantry)
    }).catch(function (error) {
      return res.status(500).json(responses.serverError(error))
    })
  }).catch(function (error) {
    return res.status(500).json(responses.serverError(error))
  })
})

module.exports = router
