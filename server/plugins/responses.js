const debug = require('debug')('brainfood:server')

function missingParamError (param) {
  return {
    success: false,
    message: `Missing parameter: ${param}`
  }
}

function unauthorizedError () {
  return {
    success: false,
    message: 'Unauthorized'
  }
}

function serverError (msg) {
  debug(msg)

  return {
    success: false,
    message: 'Something went wrong.'
  }
}

module.exports = { missingParamError, unauthorizedError, serverError }
