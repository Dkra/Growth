/**
 * https://leetcode.com/problems/shortest-word-distance/
 */

/**
 * Runtime: 68 ms, faster than 30.17% of JavaScript online submissions for Shortest Word Distance.
 * Memory Usage: 36.7 MB, less than 63.74% of JavaScript online submissions for Shortest Word Distance.
 */

/** Reflection: Check solution file for two pointer solution file
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

const shortestDistance = (words, word1, word2) => {
  let prev = null
  let prevWord = null
  let leastDiff = Number.POSITIVE_INFINITY

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1 || words[i] === word2) {
      if (prev !== null && prevWord !== words[i] && i - prev < leastDiff) {
        leastDiff = i - prev
      }
      prev = i
      prevWord = words[i]
    }
  }
  return leastDiff
}

module.exports = shortestDistance
