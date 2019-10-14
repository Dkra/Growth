/**
 * https://leetcode.com/problems/word-pattern/
 */

/**
 * Runtime: 48 ms, faster than 89.73% of JavaScript online submissions for Word Pattern.
 * Memory Usage: 33.9 MB, less than 27.27% of JavaScript online submissions for Word Pattern.
 */

/**
 * Approach:
 *  [Note] Both way should be 1 to 1 mapping
 *  if both way is undefined: do Two way binding,
 *  otherwise, check if two way binding is consistence compare to past records
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var wordPattern = function(pattern, str) {
  const strArr = str.split(' ')
  if (pattern.length !== strArr.length) return false
  const mapperP = {}
  const mapperS = {}

  for (let i = 0; i < pattern.length; i++) {
    // if both way is undefined: do Two way binding,
    if (mapperP[pattern[i]] === undefined && mapperS[strArr[i]] === undefined) {
      mapperP[pattern[i]] = strArr[i]
      mapperS[strArr[i]] = pattern[i]
    } else {
      // check if two way binding of two mappers is consistence compare to past records
      // both way should be always one-to-one relationship
      if (mapperP[pattern[i]] !== strArr[i] || mapperS[strArr[i]] !== pattern[i]) return false
    }
  }
  return true
}

export default wordPattern
