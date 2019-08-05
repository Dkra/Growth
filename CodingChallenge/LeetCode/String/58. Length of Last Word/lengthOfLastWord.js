/**
 * https://leetcode.com/problems/length-of-last-word/
 */

/**
 * Runtime:
 * Memory Usage:
 */

/**
 * Approach:
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const arr = s.split(" ")
  if (arr.length === 0) return 0
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length !== 0) return arr[i].length
  }
  return 0
}

module.exports = lengthOfLastWord
