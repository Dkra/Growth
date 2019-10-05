/**
 * https://leetcode.com/problems/first-unique-character-in-a-string
 */

/**
 * Runtime: 96 ms, faster than 60.74% of JavaScript online submissions for First Unique Character in a String.
 * Memory Usage: 38.8 MB, less than 32.50% of JavaScript online submissions for First Unique Character in a String.
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

var firstUniqChar = function(s) {
  let charMap = {}
  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]] === undefined) {
      charMap[s[i]] = i
    } else {
      charMap[s[i]] = null
    }
  }

  for (const key in charMap) {
    if (charMap[key] !== null) return charMap[key]
  }

  return -1
}
export default firstUniqChar
