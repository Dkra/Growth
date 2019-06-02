/**
 * https://leetcode.com/problems/jump-game/
 */

/**
 * Runtime: 56 ms, faster than 95.68% of JavaScript online submissions for Jump Game.
Memory Usage: 35.7 MB, less than 51.99% of JavaScript online submissions for Jump Game.
 */

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/** Reflection:
 * keep tracking farestIdx (like road keep expanding if possible)
 * if current idx more than farestIdx, fail to go the end of index
 * (like road is not long enough, fall into the water)
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = nums => {
  let farestIdx = 0
  for (let i = 0; i < nums.length; i++) {
    if (farestIdx < i) return false
    farestIdx = Math.max(i + nums[i], farestIdx)
    if (farestIdx >= nums.length - 1) return true
  }
}
module.exports = canJump
