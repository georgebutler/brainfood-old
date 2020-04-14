const debug = require('debug')('brainfood:server')

function missingParamError (param) {
  return {
    code: 'error/missing-param',
    detail: `${param}`
  }
}

function notUniqueError (param) {
  return {
    code: 'error/not-unique',
    detail: `${param}`
  }
}

function unauthorizedError () {
  return {
    code: 'error/not-authorized'
  }
}

function serverError (msg) {
  debug(msg)

  return {
    code: 'error/generic'
  }
}

module.exports = {
  missingParamError,
  unauthorizedError,
  serverError,
  notUniqueError
}
