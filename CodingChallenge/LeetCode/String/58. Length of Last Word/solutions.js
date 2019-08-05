/* eslint-disable */

/**
 * Approach:
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

/** Allright, this is Neat
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  return s
    .trim()
    .split(" ")
    .pop().length
}
