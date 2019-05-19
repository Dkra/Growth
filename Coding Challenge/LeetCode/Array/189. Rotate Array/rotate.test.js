const rotate = require("./rotate")

test("should rotate by k step", () => {
  expect(rotate([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100])
  expect(rotate([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2])
  expect(rotate([1, 2], 3)).toEqual([2, 1])

  // Edge Cases
  // expect(rotate()).toEqual()
})
