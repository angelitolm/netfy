/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */
'use strict'

// ===============================================================
// Import Modules
// ===============================================================
const app = require('./server')
const mongoose = require('mongoose')

// ===============================================================
// Settings
// ===============================================================
const config = require('./src/configs/parameters')

// ===============================================================
// Connection to Database
// ===============================================================
mongoose.set('useCreateIndex', true)
mongoose.connect(config.dbUri, { useNewUrlParser: true })
  .then(db => console.log('MongoDB is running'))
  .catch(err => console.error(err))

// ===============================================================
// Starting the server
// ===============================================================
app.listen(config.appPort, () => {
  console.log(`API Rest Netfy running on http://localhost:${config.appPort}`)
})

module.exports = mongoose
