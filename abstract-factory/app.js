const iPhoneFactory = require("./iPhoneFactory")
const { IPHONE_XR, IPHONE_XS, IPHONE_XS_MAX } = require("./iPhoneTypes")

const iPhoneXR = iPhoneFactory.create(IPHONE_XR, 'XR-0001')
const iPhoneXS = iPhoneFactory.create(IPHONE_XS, 'XS-0001')
const iPhoneXSMax = iPhoneFactory.create(IPHONE_XS_MAX, 'XSMax-0001')

iPhoneXR.displayConfig()
iPhoneXS.displayConfig()
iPhoneXSMax.displayConfig()
