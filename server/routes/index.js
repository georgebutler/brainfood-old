const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  return res.status(200).json({ test: 'test' })
})

module.exports = router
