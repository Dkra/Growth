const majorityElement = require("./majorityElement")

test("Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.", () => {
  expect(majorityElement([1, 3, 3, 4]).sort()).toEqual([3])
  expect(majorityElement([3, 2, 3]).sort()).toEqual([3])
  expect(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]).sort()).toEqual([1, 2])
  expect(majorityElement([1, 2, 2, 3, 2, 1, 1, 3]).sort()).toEqual([1, 2])
  expect(majorityElement([0, -1, 2, -1]).sort()).toEqual([-1])

  // Edge Cases
  expect(majorityElement([2, 2]).sort()).toEqual([2])
})
