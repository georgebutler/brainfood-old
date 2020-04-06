const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/', function (req, res, next) {
  // const User = mongoose.model('Blog', userSchema)
})

router.post('/', async function (req, res) {
  const name = { first: req.body.name.first, last: req.body.name.last }
  const user = new User({ email: req.body.email, name })

  await User.register(user, req.body.password)
    .then((newUser) => {
      return res.status(201).json(newUser)
    })
    .catch(function (error) {
      console.error(error)
      return res.status(400).json(error)
    })
})

router.get('/:id', async function (req, res) {
  await User.findOne({
    _id: req.params.id
  }, '_id', function (err, user) {
    if (err) {
      return res.status(400).json(err)
    } else {
      return res.status(200).json(user)
    }
  })
})

module.exports = router
