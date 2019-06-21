const canCompleteCircuit = require("./canCompleteCircuit")

test("verify if can complete circuit", () => {
  // Success
  expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toEqual(3)

  // Fail
  expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toEqual(-1)

  // Edge Cases
  expect(canCompleteCircuit([2], [4])).toEqual(-1) // one station
  expect(canCompleteCircuit([4], [2])).toEqual(0) // one station
})
