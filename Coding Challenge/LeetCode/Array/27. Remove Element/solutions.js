/* eslint-disable */
// https://leetcode.com/submissions/detail/229326041/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}
