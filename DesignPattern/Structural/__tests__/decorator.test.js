const {
  BaseCoffee,
  MilkDecorator,
  WaterDecorator
} = require("../Decorator")

describe("Test Decorator Pattern Behavior", () => {
  const baseCoffee = new BaseCoffee()
  const milkAddedCoffee = new MilkDecorator(baseCoffee)
  const waterMilkAddedCoffee = new WaterDecorator(milkAddedCoffee)

  test("Price Validator", () => {
    expect(baseCoffee.getPrice()).toBe(10)
    expect(milkAddedCoffee.getPrice()).toBe(17)
    expect(waterMilkAddedCoffee.getPrice()).toBe(18)
  })

  test("Get Material method", () => {
    expect(waterMilkAddedCoffee.getMaterial()).toBe('BaseCoffee, Milk, Water')
  })
})
