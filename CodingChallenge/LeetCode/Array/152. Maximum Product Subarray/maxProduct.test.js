const maxProduct = require("./maxProduct")

test("problem", () => {
  expect(maxProduct([2, 3, -2, 4])).toEqual(6)

  // Edge Cases
  expect(maxProduct([-2])).toEqual(-2)
  expect(maxProduct([-2, 3, -4])).toEqual(24)
})
