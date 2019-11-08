/**
 * https://leetcode.com/problems/isomorphic-strings
 */

/**
 * Runtime: 72 ms, faster than 37.61% of JavaScript online submissions for Isomorphic Strings.
 * Memory Usage: 36 MB, less than 70.59% of JavaScript online submissions for Isomorphic Strings.
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
var isIsomorphic = function(s, t) {
  const mapperA = {}
  const mapperB = {}
  for (let i = 0; i < s.length; i++) {
    if (mapperA[s[i]] === undefined) mapperA[s[i]] = t[i]
    if (mapperB[t[i]] === undefined) mapperB[t[i]] = s[i]
    if (mapperA[s[i]] !== t[i] || mapperB[t[i]] !== s[i]) return false
  }
  return true
}

export default isIsomorphic
