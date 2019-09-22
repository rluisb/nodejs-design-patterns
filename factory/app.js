const iPhoneXR = require("./iPhoneXR")
const iPhoneXS = require("./iPhoneXS")
const iPhoneXSMax = require("./iPhoneXSMax")

const newiPhoneXR = new iPhoneXR('XR-0001')
const newiPhoneXS = new iPhoneXR('XS-0001')
const newiPhoneXSMax = new iPhoneXR('XSMax-0001')


newiPhoneXR.displayConfig()
newiPhoneXS.displayConfig()
newiPhoneXSMax.displayConfig()
newiPhoneXR.dial('99999999')
newiPhoneXS.dial('99999999')
newiPhoneXSMax.dial('99999999')
