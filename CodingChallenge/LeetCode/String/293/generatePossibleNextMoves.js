/**
 * https://leetcode.com/problems/find-the-celebrity/
 */

/**
 * Runtime: 64 ms, faster than 20.51% of JavaScript online submissions for Flip Game.
Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Flip Game.
 */

/**
 * Approach:
 * Time complexity: O(N)
 * Space complexity: O()
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
  if (s.length <= 1) return []
  let flippedArr = []
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === '+' && s[i] === '+') {
      flippedArr.push(`${s.slice(0, i - 1)}--${s.slice(i + 1)}`)
    }
  }
  return flippedArr
}

export default generatePossibleNextMoves
