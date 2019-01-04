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
const { dbUri } = require('./src/configs/database')
const { port } = require('./src/configs/app')

// ===============================================================
// Connection to Database
// ===============================================================
mongoose.set('useCreateIndex', true)
mongoose.connect(dbUri, { useNewUrlParser: true })
  .then(db => console.log('MongoDB is running'))
  .catch(err => console.error(err))

// ===============================================================
// Starting the server
// ===============================================================
app.listen(port, () => {
  console.log(`API Rest Netfy running on http://localhost:${port}`)
})

module.exports = mongoose
