const express = require('express')
const passport = require('passport')
const router = express.Router()

const User = require('../models/user')
const util = require('../plugins/util')
const responses = require('../plugins/responses')

/**
 * @api {get} /user/ Request User information
 * @apiName GetUser
 * @apiGroup Users
 */
router.get('/', passport.authenticate('jwt', { session: false }, undefined), (req, res) => {
  // Auth
  const decoded = util.getUserFromToken(req.headers)

  if (!decoded) {
    return res.status(400).json(responses.unauthorizedError())
  }

  // Exec
  return res.status(200).json(decoded)
})

router.get('/:id', passport.authenticate('jwt', { session: false }, undefined), function (req, res) {
  // Auth
  const decoded = util.getUserFromToken(req.headers)

  if (!decoded) {
    return res.status(400).json(responses.unauthorizedError())
  }

  // Params
  const id = req.params.id

  // Exec
  User.findById(id).then(function (user) {
    return res.status(200).json(user)
  }).catch(function (error) {
    return res.status(500).json(responses.serverError(error))
  })
})

module.exports = router
