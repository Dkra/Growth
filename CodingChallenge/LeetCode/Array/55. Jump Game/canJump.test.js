const canJump = require("./canJump")

test("problem", () => {
  expect(canJump([2, 3, 1, 1, 4])).toEqual(true)
  expect(canJump([3, 2, 1, 0, 4])).toEqual(false)
  expect(canJump([2, 3, 1, 1, 4, 0, 0, 0])).toEqual(true)

  // Edge Cases
  expect(canJump([1, 0, 0])).toEqual(false)
  expect(canJump([1, 1])).toEqual(true)
  expect(canJump([2, 0])).toEqual(true)
})
