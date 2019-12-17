/**
 * https://leetcode.com/problems/find-the-celebrity/
 */

/**
 * Runtime: 64 ms, faster than 12.94% of JavaScript online submissions for Excel Sheet Column Title.
Memory Usage: 34 MB, less than 25.00% of JavaScript online submissions for Excel Sheet Column Title.
 */

/**
 * Approach: 26進制題 position from right to left
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let title = ''
  let rem

  while (n > 0) {
    rem = (n - 1) % 26
    n = (n - 1 - rem) / 26
    title = String.fromCharCode(65 + rem) + title
  }
  return title
}

export default convertToTitle
