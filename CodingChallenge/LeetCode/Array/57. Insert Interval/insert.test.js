const insert = require("./insert")

test("problem", () => {
  expect(insert([[3, 5], [12, 15]], [6, 6])).toEqual([[3, 5], [6, 6], [12, 15]])
  expect(insert([[1, 5]], [2, 7])).toEqual([[1, 7]])
  expect(insert([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]])
  expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toEqual([
    [1, 2],
    [3, 10],
    [12, 16]
  ])

  // Edge Cases
  expect(insert([], [5, 7])).toEqual([[5, 7]])
  expect(insert([[1, 5]], [6, 8])).toEqual([[1, 5], [6, 8]])
  expect(insert([[1, 5]], [0, 0])).toEqual([[0, 0], [1, 5]])
})
