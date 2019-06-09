const increasingTriplet = require("./increasingTriplet")

test("problem", () => {
  expect(increasingTriplet([1, 2, 3, 4, 5])).toEqual(true)
  expect(increasingTriplet([5, 4, 3, 2, 1])).toEqual(false)

  // Edge Cases
  expect(increasingTriplet([2, 1])).toEqual(false)
  expect(increasingTriplet([1, 2, 3])).toEqual(true)
  expect(increasingTriplet([3, 2, 4])).toEqual(false)
})
