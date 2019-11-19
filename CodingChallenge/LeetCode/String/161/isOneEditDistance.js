/**
 * https://leetcode.com/problems/one-edit-distance/
 */

/** Read comments in the code
 * Runtime: 56 ms, faster than 84.42% of JavaScript online submissions for One Edit Distance.
 * Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for One Edit Distance.
 */

/**
 * Approach:
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  if (s === t || Math.abs(s.length - t.length) > 1) return false
  let a = s
  let b = t

  for (let i = 0; i < Math.max(s.length, t.length); i++) {
    // When diff occur  e.g  bc & abc
    if (a[i] !== b[i]) {
      // if length diff, make them the same  !bc & abc
      if (a.length !== b.length) {
        a.length > b.length ? (b = `!${b}`) : (a = `!${a}`)
      }
      // substring from i+1 should be the same to esure ONE EDIT APART
      if (a.slice(i + 1) === b.slice(i + 1)) return true
      else return false
    }
  }
}

export default isOneEditDistance
