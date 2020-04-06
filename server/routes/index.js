const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  return res.status(200).json({
    online: true,
    version: `${process.env.npm_package_version}`
  })
})

module.exports = router
