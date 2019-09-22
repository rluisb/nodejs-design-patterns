const Bank = require("./Bank")

class Citibank extends Bank {
  processPayment() {
    console.log(`Your payment of ${this.amount} for ${this.account} has been processed by Chase`)
  }

  processRefund() {
    console.log(`A refund of ammount ${this.amount} for ${this.account} has been processed by Chase`)
  }  
}

module.exports = Citibank
