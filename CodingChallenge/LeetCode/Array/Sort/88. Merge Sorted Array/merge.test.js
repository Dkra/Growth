const merge = require("./merge")

test("problem", () => {
  expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6])

  // Edge Cases
  // expect(merge()).toEqual()
})
