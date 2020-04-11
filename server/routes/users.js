const express = require('express')
const passport = require('passport')
const router = express.Router()

const User = require('../models/user')
const util = require('../plugins/util')

/**
 * @api {get} /user/ Request User information
 * @apiName GetUser
 * @apiGroup Users
 */
router.get('/', passport.authenticate('jwt', { session: false }, undefined), (req, res) => {
  const user = util.getUserFromToken(req.headers)

  if (user) {
    return res.status(200).json(user)
  } else {
    return res.status(401).json({
      success: false,
      message: 'Not authorized'
    })
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
      return res.status(400).json({
        success: false,
        message: 'That user could not be found.'
      })
    }
  })
})

module.exports = router
