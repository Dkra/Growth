const generate = require("./generate")

test("problem", () => {
  expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])

  // Edge Cases
  // expect(generate()).toEqual()
})
