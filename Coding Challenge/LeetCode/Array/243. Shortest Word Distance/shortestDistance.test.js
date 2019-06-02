const shortestDistance = require("./shortestDistance")

test("Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list", () => {
  expect(
    shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice")
  ).toEqual(3)
  expect(
    shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding")
  ).toEqual(1)

  expect(shortestDistance(["a", "b", "c", "d", "d"], "a", "d")).toEqual(3)
})
