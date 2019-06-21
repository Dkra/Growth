const containsDuplicate = require("./containsDuplicate")

test("problem", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toEqual(true)
  expect(containsDuplicate([1, 2, 3, 4])).toEqual(false)
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true)
  expect(containsDuplicate([-1200000005, -1200000005])).toEqual(true)
  // Edge Cases
  // expect(containsDuplicate()).toEqual()
})
