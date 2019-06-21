const removeDuplicates = require("./removeDuplicates")

test("should remove duplicate", () => {
  expect(removeDuplicates([1, 1, 1, 2, 2, 3])).toEqual([1, 1, 2, 2, 3])
  expect(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])).toEqual([0, 0, 1, 1, 2, 3, 3])
})
