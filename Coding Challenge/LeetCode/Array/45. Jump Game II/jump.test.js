const jump = require("./jump")

test("problem", () => {
  expect(jump([1, 2, 1, 1, 1])).toEqual(3)
  expect(jump([2, 3, 1, 1, 4])).toEqual(2)
  expect(jump([0])).toEqual(0)
  expect(jump([2, 1])).toEqual(1)
  expect(jump([1, 2, 3])).toEqual(2)

  // Edge Cases

  expect(jump([2, 3, 1])).toEqual(1)
  // expect(jump([1, 1])).toEqual(true)
  // expect(jump([2, 0])).toEqual(true)
})
