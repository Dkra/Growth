/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 */

/**
 * Runtime: 72 ms, faster than 67.18% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
 * Memory Usage: 35.7 MB, less than 98.94% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
 */

/**
 * Approach:
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * Approach: Insert pointer
 * nums[i] > nums[insertPtr - 2]: if true =>   1 1 2(i)
 * nums[i] > nums[insertPtr - 2]: if false =>  1 1 1(i)
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = nums => {
  let insertPtr = 0

  for (let i = 0; i < nums.length; i++) {
    if (i < 2 || nums[i] > nums[insertPtr - 2]) nums[insertPtr++] = nums[i]
  }
  return nums.slice(0, insertPtr) // for test
  // return insertPtr // for leetcode arr length
}

module.exports = removeDuplicates
