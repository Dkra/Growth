/**
 * https://leetcode.com/problems/product-of-array-except-self/
 */

/**
 * Runtime: 72 ms, faster than 98.36% of JavaScript online submissions for Product of Array Except Self.
 * Memory Usage: 42.2 MB, less than 86.49% of JavaScript online submissions for Product of Array Except Self.
 */

/**
 * Approach: One addition array one is Left (Improve without Right array)
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  const left = []
  const output = []

  left[0] = 1
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1]
  }

  let R = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    left[i] = left[i] * R
    R = R * nums[i]
  }

  return left
}
module.exports = productExceptSelf
