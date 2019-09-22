const Payment = require("./Payment")
const Chase = require("./Chase")
const Citibank = require("./Citibank")


const payment = new Payment()

payment.pay(new Chase(200, "111000111"))
payment.pay(new Citibank(150, "000111000"))
payment.refund(new Chase(50, "111000111"))

