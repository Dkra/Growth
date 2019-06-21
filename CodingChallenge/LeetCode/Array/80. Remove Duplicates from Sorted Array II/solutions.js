/* eslint-disable */
// https://leetcode.com/submissions/detail/229327729/

/**
 * @param {number[]} nums
 * @return {number}
 */

// sample 56 ms submission
var removeDuplicates = function(nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (j < 2 || nums[j] > nums[i - 2]) {
      nums[i++] = nums[j]
    }
  }

  return i
}
