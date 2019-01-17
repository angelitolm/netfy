/*
  This file is a part of Netfy
  Author: Angel Labrada Massó
 */

// ===============================================================
// Global Settings
// ===============================================================
module.exports = {
  dbUri: process.env.MONGODB || 'mongodb://localhost:27017/netfy',
  apiPort: process.env.PORT || 4100,
  SECRET_TOKEN: 'NetfyPass'
}
