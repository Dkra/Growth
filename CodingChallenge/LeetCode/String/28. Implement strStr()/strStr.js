/**
 * https://leetcode.com/problems/implement-strstr/
 */

/**
 * Runtime: 60 ms, faster than 57.15% of JavaScript online submissions for Implement strStr().
 * Memory Usage: 35 MB, less than 43.88% of JavaScript online submissions for Implement strStr().
 */

/**
 * Approach: Brute Force
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack.charAt(i + j) !== needle.charAt(j)) break
      else if (j === needle.length - 1) return i
    }
  }
  return -1
}

module.exports = strStr
