/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */
'use strict'

// ===============================================================
// Global Settings
// ===============================================================
module.exports = {
  dbUri: process.env.MONGODB || 'mongodb://localhost:27017/netfy',
  appPort: process.env.PORT || 3000,
  SECRET_TOKEN: 'Mypassword'
}
