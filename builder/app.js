const PizzaBuilder = require("./PizzaBuilder")

const peperoniPizza = new PizzaBuilder()
                        .withBase('Whole Wheat')
                        .withSauce('Tomato Basil')
                        .withCheese('Smoked Mozzarella')
                        .withToppings(['Pepperoni', 'Basil'])
                        .bake()

console.log(peperoniPizza)
                      
