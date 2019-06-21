/**
 * https://leetcode.com/problems/shortest-word-distance-iii/
 */

/**
 * Runtime: 60 ms, faster than 95.56% of JavaScript online submissions for Shortest Word Distance III.
 * Memory Usage: 36.3 MB, less than 91.18% of JavaScript online submissions for Shortest Word Distance III.
 */

/** Reflection:
 * For the same word, Keep p1, p2 close to the current index i
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

const shortestDistance = (words, word1, word2) => {
  let p1 = -1,
    p2 = -1,
    leastDist = Number.POSITIVE_INFINITY
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1 || words[i] === word2) {
      if (word1 === word2) {
        // if p1 index bigger than p2 index,
        // means p2 is far from index i, so update p2 = i
        if (p1 > p2) p2 = i
        else p1 = i
      } else {
        if (words[i] === word1) p1 = i
        if (words[i] === word2) p2 = i
      }
      if (p1 !== -1 && p2 !== -1) {
        leastDist = Math.min(leastDist, Math.abs(p2 - p1))
      }
    }
  }
  return leastDist
}

module.exports = shortestDistance
