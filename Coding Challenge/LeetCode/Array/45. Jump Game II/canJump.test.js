const canJump = require("./canJump")

test("problem", () => {
  expect(canJump([2, 3, 1, 1, 4])).toEqual(2)
  expect(canJump([0])).toEqual(0)
  expect(canJump([2, 1])).toEqual(1)
  expect(canJump([1, 2, 3])).toEqual(2)

  // Edge Cases

  expect(canJump([2, 3, 1])).toEqual(1)
  // expect(canJump([1, 1])).toEqual(true)
  // expect(canJump([2, 0])).toEqual(true)
})
