const moveZeroes = require("./moveZeroes")

test("problem", () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0])

  // Edge Cases
  // expect(moveZeroes()).toEqual()
})
