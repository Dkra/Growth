const firstMissingPositive = require("./firstMissingPositive")

test("problem", () => {
  expect(firstMissingPositive([1, 2, 0])).toEqual(3)

  // Edge Cases
  expect(firstMissingPositive([])).toEqual(1) // Empty Array
  expect(firstMissingPositive([1])).toEqual(2) // Single Element
  expect(firstMissingPositive([2, 1])).toEqual(3) // Double collision
})
