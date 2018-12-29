'use strict'

// Import Modules
const services = require('../services')

function isAuthenticated (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'No authorization' })
  }

  const token = req.headers.authorization.split(' ')[1]

  services.decodeToken(token)
    .then(response => {
      req.user = response
      next()
    })
    .catch(response => {
      res.status(response.status)
    })
}

module.exports = isAuthenticated
