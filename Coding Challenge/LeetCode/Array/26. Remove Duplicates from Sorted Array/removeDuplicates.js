/*
  https://leetcode.com/problems/remove-duplicates-from-sorted-array/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = nums => {
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  // return i + 1
  return nums.slice(0, i + 1) // for test
}

/**
 * - double pointer: i, j
 * i: last set value position
 * j: traverse from 1 to end of array
 * nums[i] !== nums[j], i++ then set j's value to nums[i]
 */

module.exports = removeDuplicates
