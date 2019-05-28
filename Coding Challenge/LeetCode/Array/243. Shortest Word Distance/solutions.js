/* eslint-disable */
// https://leetcode.com/submissions/detail/231909898/

/**
 * Solutions: Two pointer
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

const shortestDistance = (words, word1, word2) => {
  let p1 = -1,
    p2 = -1,
    leastDiff = Number.POSITIVE_INFINITY
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) p1 = i
    if (words[i] === word2) p2 = i
    if (p1 !== -1 && p2 !== -1) {
      leastDiff = Math.min(leastDiff, Math.abs(p1 - p2))
    }
  }
  return leastDiff
}
