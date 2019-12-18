/**
 * Runtime: 60 ms, faster than 61.16% of JavaScript online submissions for Longest Common Prefix.
 * Memory Usage: 35 MB, less than 50.00% of JavaScript online submissions for Longest Common Prefix.
 */

/**
 * Approach: Vertical scan
 * Time complexity: O(N * M) N: # of strings, M: longest length of string
 * Space complexity: O(1)
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0 || strs[0].length === 0) return ''
  let cmprefix = ''
  // check strs[0] string from idx 0 to length - 1,
  // compare with other words a char one by one
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0].charAt(i) !== strs[j].charAt(i)) return cmprefix
    }
    cmprefix = cmprefix + strs[0].charAt(i)
  }
  return cmprefix
}

export default longestCommonPrefix
