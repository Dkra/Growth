const wiggleSort = require("./wiggleSort")

test("problem", () => {
  // when using: sorted approcah
  // expect(wiggleSort([3, 5, 2, 1, 6, 4])).toEqual([1, 3, 2, 5, 4, 6])

  // when using: on-pass swap approach
  expect(wiggleSort([3, 5, 2, 1, 6, 4])).toEqual([3, 5, 1, 6, 2, 4])

  // Edge Cases
  // expect(wiggleSort()).toEqual()
})
