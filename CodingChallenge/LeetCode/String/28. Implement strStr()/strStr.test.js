const strStr = require("./strStr")

test("problem", () => {
  expect(strStr("hello", "ll")).toEqual(2)
  expect(strStr("aaaaa", "bba")).toEqual(-1)

  // Edge Cases
  // expect(strStr()).toEqual()
})
