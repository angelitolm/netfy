'use strict'

// Import Modules
const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../../config')

// Create Token
function createToken (user) {
  const payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  }

  return jwt.encode(payload, config.SECRET_TOKEN)
}

// Decode Token
function decodeToken (token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, config.SECRET_TOKEN)

      if (payload.exp <= moment().unix()) {
        // Message when the token has been expired
        reject(new Error({
          status: 401,
          message: 'The Token has been exprired'
        }))
      }

      resolve(payload.sub)
    } catch (err) {
      // Invalid token
      reject(new Error({
        status: 500,
        message: 'Invalid Token'
      }))
    }
  })

  return decoded
}

module.exports = {
  createToken,
  decodeToken
}
