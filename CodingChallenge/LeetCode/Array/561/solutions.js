/* eslint-disable */

/**
 * Runtime: 112 ms, faster than 83.80% of JavaScript online submissions for Array Partition I.
 * Memory Usage: 39.1 MB, less than 11.11% of JavaScript online submissions for Array Partition I.
 */

/**
 * Approach: Sorted Array
 * Time complexity: O(NlogN)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  if (!nums.length) return 0
  let sum = 0;
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i]
  }

  return sum
};