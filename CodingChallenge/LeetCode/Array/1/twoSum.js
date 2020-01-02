/**
 * Runtime: 52 ms, faster than 93.97% of JavaScript online submissions for Two Sum.
 * Memory Usage: 34.5 MB, less than 79.75% of JavaScript online submissions for Two Sum.
 */

/**
 * Approach: One-pass Hash Table
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function (nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i]
    } else {
      map[nums[i]] = i
    }
  }
};

export default twoSum