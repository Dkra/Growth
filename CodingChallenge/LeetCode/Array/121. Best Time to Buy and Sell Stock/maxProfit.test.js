const maxProfit = require("./maxProfit")

test("problem", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5)
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0)

  // Edge Cases
  expect(maxProfit([1, 1, 1])).toEqual(0)
  // expect(maxProfit()).toEqual()
})
