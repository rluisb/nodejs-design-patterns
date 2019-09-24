const Pizza = require("./Pizza")

class PizzaBuilder {
  constructor(base, sauce, cheese, toppings) {
   this.base = base
   this.sauce = sauce
   this.cheese = cheese
   this.toppings = toppings
  } 

  withBase(base) {
    this.base = base
    return this
  }

  withSauce(sauce) {
    this.sauce = sauce
    return this
  }

  withCheese(cheese) {
    this.cheese = cheese
    return this
  }

  withToppings(toppings) {
    this.toppings = toppings
    return this
  }

  bake() {
   return new Pizza(this)
  }
}

module.exports = PizzaBuilder
