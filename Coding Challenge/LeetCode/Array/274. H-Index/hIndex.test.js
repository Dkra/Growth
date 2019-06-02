const hIndex = require("./hIndex")

test("find the biggest h-index", () => {
  expect(hIndex([3, 0, 6, 1, 5])).toEqual(3)
  expect(hIndex([0, 1])).toEqual(1)
  expect(hIndex([1, 1])).toEqual(1)

  // Edge Cases
  expect(hIndex([0])).toEqual(0)
  expect(hIndex([0, 0])).toEqual(0)
})
