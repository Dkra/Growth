const wiggleMaxLength = require("./wiggleMaxLength")

test("problem", () => {
  // expect(wiggleMaxLength([1, 7, 4, 9, 2, 5])).toEqual(6)
  expect(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])).toEqual(7)
  expect(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(2)

  // Edge Cases
  // expect(wiggleMaxLength()).toEqual()
})
