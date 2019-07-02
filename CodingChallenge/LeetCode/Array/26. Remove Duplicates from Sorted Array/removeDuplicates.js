/*
  https://leetcode.com/problems/remove-duplicates-from-sorted-array/
*/

/**
 * Runtime: 84 ms, faster than 51.21% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 * Memory Usage: 36.6 MB, less than 99.53% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 */

/**
 * Approach: double pointer: i, j
 * i: last set value position
 * j: traverse from 1 to end of array
 * nums[i] !== nums[j], i++ then set j's value to nums[i]
 * Time complexity: O(N)
 * Space complexity: O(1)
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

module.exports = removeDuplicates
