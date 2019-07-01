/*
  https://leetcode.com/problems/remove-element/
*/

/**
 * Runtime: 52 ms, faster than 90.47 % of JavaScript online submissions for Remove Element.
 * Memory Usage: 33.7 MB, less than 98.61 % of JavaScript online submissions for Remove Element.
 */

/**
 * Approach: Insert Pointer start from 0
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
  let insertPtr = 0
  let length = nums.length
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) length--
    else nums[insertPtr++] = nums[i]
  }
  return length
}

module.exports = removeElement
