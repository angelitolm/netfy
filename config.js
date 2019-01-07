'use strict'

// Globals Config
module.exports = {
  port: process.env.PORT || 3000,
  dbUri: process.env.MONGODB || 'mongodb://localhost:27017/netfy',
  SECRET_TOKEN: 'mykeytokens'
}
