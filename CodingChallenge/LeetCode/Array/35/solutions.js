/* eslint-disable */

/**
 * Runtime: 60 ms, faster than 34.95% of JavaScript online submissions for Search Insert Position.
 * Memory Usage: 34.6 MB, less than 37.50% of JavaScript online submissions for Search Insert Position.
 */

/**
 * Approach: iterate the array
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let i = 0
  // eslint-disable-next-line no-empty
  for (i = 0; nums[i] < target && i < nums.length; i++) {}
  return i
}
