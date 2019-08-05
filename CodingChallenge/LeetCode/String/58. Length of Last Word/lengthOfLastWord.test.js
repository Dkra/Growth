const lengthOfLastWord = require("./lengthOfLastWord")

test("problem", () => {
  expect(lengthOfLastWord("Hello World")).toEqual(5)

  // Edge Cases
  expect(lengthOfLastWord("")).toEqual(0)
  expect(lengthOfLastWord(" ")).toEqual(0)
  expect(lengthOfLastWord("abc ")).toEqual(3) // I thougt its 0, but it's 3
})
