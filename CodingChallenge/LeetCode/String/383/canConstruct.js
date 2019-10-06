/**
 * https://leetcode.com/problems/ransom-note/
 */

/**
 * Runtime: 84 ms, faster than 58.31% of JavaScript online submissions for Ransom Note.
 * Memory Usage: 38.3 MB, less than 33.33% of JavaScript online submissions for Ransom Note.
 */

/**
 * Approach:
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const availableMap = {}
  for (const char of magazine) {
    if (availableMap[char] === undefined) availableMap[char] = 1
    else availableMap[char] += 1
  }

  for (const char of ransomNote) {
    if (availableMap[char] > 0) availableMap[char] -= 1
    else return false
  }

  return true
}

export default canConstruct
