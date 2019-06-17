const trap = require("./trap")

test("problem", () => {
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6)

  // Edge Cases
  // expect(trap()).toEqual()
})
