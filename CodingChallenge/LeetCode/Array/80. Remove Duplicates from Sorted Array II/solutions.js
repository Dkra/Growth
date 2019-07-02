/* eslint-disable */
// https://leetcode.com/submissions/detail/229327729/

/**
 * Runtime: 64 ms, faster than 91.30% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
 * Memory Usage: 35.7 MB, less than 98.24% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
 */

/**
 * Approach:
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * Approach: Insert pointer, counter
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = nums => {
  let insertPtr = 1
  let counter = 1
  let length = nums.length

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[insertPtr - 1]) {
      if (counter < 2) {
        nums[insertPtr++] = nums[i]
        counter++
      } else length--
    } else {
      nums[insertPtr++] = nums[i]
      counter = 1
    }
  }

  return nums.slice(0, length)
}
