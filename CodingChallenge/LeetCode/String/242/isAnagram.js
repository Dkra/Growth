/**
 * https://leetcode.com/problems/valid-anagram/
 */

/**
 * Runtime: 120 ms, faster than 9.88% of JavaScript online submissions for Valid Anagram.
 * Memory Usage: 35.7 MB, less than 97.96% of JavaScript online submissions for Valid Anagram.
 */

/**
 * Approach:
 * Time complexity: O()
 * Space complexity: O()
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const mapper = {}
  if (s.length !== t.length) return false
  for (let i = 0; i < s.length; i++) {
    mapper[s[i]] = (mapper[s[i]] || 0) + 1
  }
  for (let j = 0; j < s.length; j++) {
    mapper[t[j]]--
    if (!(mapper[t[j]] >= 0)) return false
  }
  return true
}
export default isAnagram
