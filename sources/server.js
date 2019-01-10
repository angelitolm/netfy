/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Import Modules
// ===============================================================
const api = require('./api')
const mongoose = require('mongoose')

// ===============================================================
// Settings
// ===============================================================
const config = require('../config/parameters')

// ===============================================================
// Connection to Database
// ===============================================================
mongoose.set('useCreateIndex', true)
mongoose.connect(config.dbUri, { useNewUrlParser: true })
  .then(db => console.log('MongoDB is running...'))
  .catch(err => console.log(err))

  // ===============================================================
  // Starting the server
  // ===============================================================
  api.listen(config.apiPort, () => {
    console.log(`API Rest Netfy running on http://localhost:${config.apiPort}`)
  })

  module.exports = mongoose
