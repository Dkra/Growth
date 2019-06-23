const productExceptSelf = require("./productExceptSelf")

test("problem", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])

  // Edge Cases
  // expect(productExceptSelf()).toEqual()
})
