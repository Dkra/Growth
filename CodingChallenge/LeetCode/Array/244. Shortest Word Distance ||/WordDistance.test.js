const WordDistance = require("./WordDistance")

test("Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list", () => {
  expect(
    new WordDistance(["practice", "makes", "perfect", "coding", "makes"]).shortest(
      "coding",
      "practice"
    )
  ).toEqual(3)
  expect(
    new WordDistance(["practice", "makes", "perfect", "coding", "makes"]).shortest(
      "makes",
      "coding"
    )
  ).toEqual(1)

  expect(new WordDistance(["a", "b", "c", "d", "d"]).shortest("a", "d")).toEqual(3)
})
