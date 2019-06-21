/**
 * https://leetcode.com/problems/move-zeroes/
 */

/**
 * Runtime:
 * Memory Usage:
 */

/**
 * Approach: Insert Zero Idx from index 0
 * Runtime: 68 ms, faster than 62.23% of JavaScript online submissions for Move Zeroes.
 * Memory Usage: 35.8 MB, less than 50.61% of JavaScript online submissions for Move Zeroes.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
  let insertZeroIdx = 0
  let temp

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[i]
      nums[i] = nums[insertZeroIdx]
      nums[insertZeroIdx++] = temp
    }
  }

  return nums
}
module.exports = moveZeroes
