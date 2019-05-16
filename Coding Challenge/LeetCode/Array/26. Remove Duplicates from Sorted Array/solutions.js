/* eslint-disable */
// https://leetcode.com/submissions/detail/229095539/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let sortedIndex = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[sortedIndex - 1]) {
      nums[sortedIndex++] = nums[i]
    }
  }
  return sortedIndex
}
