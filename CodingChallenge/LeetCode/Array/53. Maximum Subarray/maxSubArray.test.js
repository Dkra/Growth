const maxSubArray = require("./maxSubArray")

test("problem", () => {
  // expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6)

  // Edge Cases
  expect(maxSubArray([-2, -1])).toEqual(-1)
  expect(maxSubArray([1])).toEqual(1)
  expect(maxSubArray([-1, -2])).toEqual(-1)
})
