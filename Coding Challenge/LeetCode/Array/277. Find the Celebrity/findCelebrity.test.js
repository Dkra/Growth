const findCelebrity = require("./findCelebrity")

test("find celebrity", () => {
  // expect(findCelebrity([[1, 1, 0], [0, 1, 0], [1, 1, 1]])(3)).toEqual(1)
  // expect(findCelebrity([[1, 1], [1, 1]])(2)).toEqual(-1)

  // Edge Cases
  // Don't know each other
  expect(findCelebrity([[1, 0], [0, 1]])(2)).toEqual(-1)
})
