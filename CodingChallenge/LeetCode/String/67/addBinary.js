/**
 * Runtime: 72 ms, faster than 29.29% of JavaScript online submissions for Add Binary.
 * Memory Usage: 36.3 MB, less than 14.29% of JavaScript online submissions for Add Binary.
 */

/**
 * Approach: Calculate from right to left
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let str = ''
  let sum = 0
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    sum = sum + +(a.charAt(a.length - i - 1) || 0) + +(b.charAt(b.length - i - 1) || 0)
    str = `${sum % 2}${str}`
    sum = sum >= 2 ? 1 : 0
  }
  return sum ? sum + str : str
}
export default addBinary
