const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/', function (req, res, next) {
  // const User = mongoose.model('Blog', userSchema)
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

router.post('/', async function (req, res) {
  const user = new User({ email: req.body.email })

  await User.register(user, req.body.password)
    .then((newUser) => {
      return res.status(201).json(newUser)
    })
    .catch(function (error) {
      console.error(error)
      return res.status(400).json(error)
    })
})

module.exports = router
