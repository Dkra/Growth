const wiggleSort = require("./wiggleSort")

test("problem", () => {
  // when using: sorted approcah
  // expect(wiggleSort([3, 5, 2, 1, 6, 4])).toEqual([1, 6, 2, 5, 3, 4])
  // [1,2,3,4,5,6] => [3,6,2,5,1,4]

  // Edge Cases
  expect(wiggleSort([1, 3, 2, 2, 3, 1])).toEqual([2, 3, 1, 3, 1, 2])
})
