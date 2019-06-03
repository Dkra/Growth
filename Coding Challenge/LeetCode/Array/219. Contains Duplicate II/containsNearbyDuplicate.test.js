const containsNearbyDuplicate = require("./containsNearbyDuplicate")

test("problem", () => {
  expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toEqual(true)
  expect(containsNearbyDuplicate([1, 2, 3, 4], 2)).toEqual(false)
  expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toEqual(true)
  expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toEqual(false)
})
