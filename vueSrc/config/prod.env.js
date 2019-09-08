'use strict'
module.exports = {
  NODE_ENV: '"production"',
  BUILD_MODE: process.env.BUILD_MODE=="Cordova"?'"Cordova"':'null'
}
