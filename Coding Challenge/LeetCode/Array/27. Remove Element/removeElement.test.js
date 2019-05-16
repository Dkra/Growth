const removeElement = require("./removeElement")

test("should remove duplicate", () => {
  expect(removeElement([1, 1, 1, 2, 2, 3], 1)).toEqual([2, 2, 3])
  expect(removeElement([0, 0, 1, 1, 1, 1, 2, 3, 3], 1)).toEqual([0, 0, 2, 3, 3])
})
