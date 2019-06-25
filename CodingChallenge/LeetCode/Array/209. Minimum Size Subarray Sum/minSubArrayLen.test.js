const minSubArrayLen = require("./minSubArrayLen")

test("problem", () => {
  // expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toEqual(2)
  expect(minSubArrayLen(11, [1, 2, 3, 4, 5])).toEqual(3)

  // Edge Cases
  // expect(minSubArrayLen()).toEqual()
})
