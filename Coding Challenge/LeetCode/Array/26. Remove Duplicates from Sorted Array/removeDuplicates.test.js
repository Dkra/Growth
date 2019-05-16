const removeDuplicates = require("./removeDuplicates")

test("should remove duplicate", () => {
  expect(removeDuplicates([1, 1])).toEqual([1])
  expect(removeDuplicates([1, 1, 2, 3])).toEqual([1, 2, 3])
})
