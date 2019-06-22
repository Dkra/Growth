const maxSubArrayLen = require("./maxSubArrayLen")

test("problem", () => {
  expect(maxSubArrayLen([1, -1, 5, -2, 3], 3)).toEqual(4)
  expect(maxSubArrayLen([-2, -1, 2, 1], 1)).toEqual(2)

  // Edge Cases
  // expect(maxSubArrayLen()).toEqual()
})
