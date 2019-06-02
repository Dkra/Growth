/**
 * https://leetcode.com/problems/find-the-celebrity/
 */

/**
 * Runtime: 60 ms, faster than 38.26% of JavaScript online submissions for Pascal's Triangle.
 * Memory Usage: 33.9 MB, less than 28.44% of JavaScript online submissions for Pascal's Triangle.
 */

/**
 * Reflection:
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return []
  let arr = [[1]],
    clonePrevArr
  for (let i = 2; i <= numRows; i++) {
    clonePrevArr = arr[i - 2].slice(0)
    for (let j = clonePrevArr.length; j >= 1; j--) {
      clonePrevArr[j] = (clonePrevArr[j] || 0) + clonePrevArr[j - 1]
    }
    arr.push(clonePrevArr)
  }
  return arr
}

module.exports = generate
