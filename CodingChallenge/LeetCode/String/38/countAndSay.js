/**
 * https://leetcode.com/problems/find-the-celebrity/
 */

/**
 * Runtime: 44 ms, faster than 99.67% of JavaScript online submissions for Count and Say.
 * Memory Usage: 35.4 MB, less than 66.67% of JavaScript online submissions for Count and Say.
 */

/**
 * Approach: standing on current position compare to j+1 position
 * Time complexity: O(n * M) n: input  M: max length of string
 * Space complexity: O(n)
 */

/**
* @param {number} n
* @return {string}
*/
var countAndSay = function (n) {
  let str = '1';
  let s = ''

  for (let i = 2; i <= n; i++) {
    s = ''
    let currNum = str[0]
    let currCount = 1
    for (let j = 0; j < str.length; j++) {
      if (currNum !== str[j + 1]) {
        s = `${s}${currCount}${currNum}`
        currNum = str[j + 1]
        currCount = 1
      } else {
        currCount++
      }
    }

    str = s
  }
  return str
};

export default countAndSay