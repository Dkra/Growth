/**
 * https://leetcode.com/problems/shortest-word-distance-ii/
 */

/**
 * Runtime: 420 ms, faster than 9.52% of JavaScript online submissions for Shortest Word Distance II.
 * Memory Usage: 46.9 MB, less than 31.37% of JavaScript online submissions for Shortest Word Distance II.
 */

/** Reflection: Check solution file for two pointer solution file
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * @param {string[]} words
 */
class WordDistance {
  constructor(words) {
    this.words = words || []
  }

  shortest(word1, word2) {
    let p1 = -1,
      p2 = -1,
      leastDist = Number.POSITIVE_INFINITY
    const words = this.words
    console.log(leastDist)
    for (let i = 0; i < words.length; i++) {
      if (words[i] === word1) p1 = i
      if (words[i] === word2) p2 = i
      if (p1 !== -1 && p2 !== -1) leastDist = Math.min(leastDist, Math.abs(p2 - p1))
    }
    return leastDist
  }
}

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(words)
 * var param_1 = obj.shortest(word1,word2)
 */

module.exports = WordDistance
