/**
 * Runtime: 60 ms, faster than 34.95% of JavaScript online submissions for Search Insert Position.
 * Memory Usage: 34.6 MB, less than 37.50% of JavaScript online submissions for Search Insert Position.
 */

/**
 * Approach:
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let start = 0,
    end = nums.length - 1,
    mid

  while (start <= end) {
    mid = Math.floor((start + end) / 2)
    if (nums[mid] === target) return mid
    else if (target < nums[mid]) end = mid - 1
    else start = mid + 1 // if (target > nums[mid])
  }
  return start
}
export default searchInsert
