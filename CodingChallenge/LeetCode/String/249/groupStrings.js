/**
 * https://leetcode.com/problems/group-shifted-strings/
 */

/**
 * Runtime: 68 ms, faster than 32.98% of JavaScript online submissions for Group Shifted Strings.
 * Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions for Group Shifted Strings.
 */

/**
 * Approach: Using Diff string to group strings
 * E.g: 'ab' => #1, 'ace' => '#2#2
 * Time complexity: O(n x M) n: length of array  M: max string length
 * Space complexity: O(n x M)
 */

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  const obj = {}

  strings.forEach(str => {
    const key = transformDiffToStr(str)
    obj[key] = obj[key] ? [...obj[key], str] : [str]
  })

  function transformDiffToStr(str) {
    if (str.length === 1) return '#'
    let diffRecordStr = ''

    for (let i = 1; i < str.length; i++) {
      if (str.charCodeAt(i) >= str.charCodeAt(i - 1)) {
        diffRecordStr = `${diffRecordStr}#${str.charCodeAt(i) - str.charCodeAt(i - 1)}`
      } else {
        // za  a:97 z: 122   97-122 = -25 + 26 =>1
        diffRecordStr = `${diffRecordStr}#${str.charCodeAt(i) - str.charCodeAt(i - 1) + 26}`
      }
    }
    // abc => '#1#1  1 here is diff between char
    return diffRecordStr
  }

  return Object.values(obj)
}

export default groupStrings
