/**
 * https://leetcode.com/problems/rotate-array/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * Time complexity: O(N)
 * Space complexity: O(N) // Not meet the criteria O(1)
 */
const rotate = (nums, k) => {
  let rotatedArr = []
  for (let i = 0; i < nums.length; i++) {
    let targetIdx = (i + k) % nums.length
    rotatedArr[targetIdx] = nums[i]
  }
  return rotatedArr
}

module.exports = rotate
