/**
 * https://leetcode.com/problems/jump-game/
 */

/**
 * Runtime: 44 ms, faster than 100.00% of JavaScript online submissions for Jump Game II.
 * Memory Usage: 35.9 MB, less than 41.23% of JavaScript online submissions for Jump Game II.
 */

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * Reflection: BFS solution
 * Every time reach the currEnd, jump++,
 * at the meantime keep tracking the currFarest
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let currFarest = 0
  let currEnd = 0
  let jump = 0
  for (let i = 0; i < nums.length - 1; i++) {
    currFarest = Math.max(currFarest, i + nums[i])
    // Optimize: if current level able to reach last index, just return jump+1
    // no need to reach the last level currEnd
    if (currFarest >= nums.length - 1) return jump + 1
    if (currEnd === i) {
      jump++
      currEnd = currFarest
    }
  }
  return jump
}
module.exports = jump
