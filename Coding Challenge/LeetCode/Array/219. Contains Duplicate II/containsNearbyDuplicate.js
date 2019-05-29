/**
 * https://leetcode.com/problems/contains-duplicate-ii/
 */

/**
 * Runtime: 60 ms, faster than 98.91% of JavaScript online submissions for Contains Duplicate II.
 * Memory Usage: 40.2 MB, less than 62.46% of JavaScript online submissions for Contains Duplicate II.
 */

/**
 * Reflection: Map solution
 * Hash Map solution
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
  if (nums.length <= 1) return false
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined && i - map.get(nums[i]) <= k) {
      return true
    } else {
      map.set(nums[i], i)
    }
  }
  return false
}

module.exports = containsNearbyDuplicate
