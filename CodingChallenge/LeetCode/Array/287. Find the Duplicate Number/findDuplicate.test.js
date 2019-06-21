const findDuplicate = require("./findDuplicate")

test("problem", () => {
  expect(findDuplicate([1, 4, 6, 6, 6, 2, 3])).toEqual(6)
  // expect(findDuplicate([1, 3, 4, 2, 2])).toEqual(2)
  // expect(findDuplicate([3, 1, 3, 4, 2])).toEqual(3)

  // Edge Cases
  // expect(findDuplicate()).toEqual()
})
