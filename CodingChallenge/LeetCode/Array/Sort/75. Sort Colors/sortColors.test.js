const sortColors = require("./sortColors")

test("problem", () => {
  expect(sortColors([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2])
  expect(sortColors([2, 0, 1])).toEqual([0, 1, 2])
  expect(sortColors([1, 2, 0])).toEqual([0, 1, 2])
  expect(sortColors([2, 1, 1, 0, 0])).toEqual([0, 0, 1, 1, 2])

  // Edge Cases
  // expect(sortColors()).toEqual()
})
