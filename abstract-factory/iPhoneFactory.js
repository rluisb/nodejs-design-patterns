const iPhoneXR = require("./iPhoneXR")
const iPhoneXS = require("./iPhoneXS")
const iPhoneXSMax = require("./iPhoneXSMax")
const { IPHONE_XR, IPHONE_XS, IPHONE_XS_MAX } = require("./iPhoneTypes")

class iPhoneFactory {
  create(type, serialNum) {
   switch(type) {
     case IPHONE_XR:
       return new iPhoneXR(serialNum)
     case IPHONE_XS:
       return new iPhoneXS(serialNum)
     case IPHONE_XS_MAX:
       return new iPhoneXSMax(serialNum)
     default: {
       console.log('Unknown iPhone type...')
     }
   }
  }
}

module.exports = new iPhoneFactory()
