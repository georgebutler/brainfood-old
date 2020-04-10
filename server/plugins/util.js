const jwt = require('jsonwebtoken')

function getToken (headers) {
  if (headers && headers.authorization) {
    const parted = headers.authorization.split(' ')

    if (parted.length === 2) {
      return parted[1]
    } else {
      return null
    }
  } else {
    return null
  }
}

function getUserFromToken (headers) {
  const encoded = getToken(headers)

  if (encoded) {
    const decoded = jwt.verify(encoded, process.env.SECRET)

    if (decoded) {
      return decoded
    } else {
      return null
    }
  } else {
    return null
  }
}

module.exports = { getToken, getUserFromToken }
