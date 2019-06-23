/* eslint-disable */

/**
 * Runtime: 104 ms, faster than 28.86% of JavaScript online submissions for Product of Array Except Self.
 * Memory Usage: 44.6 MB, less than 20.67% of JavaScript online submissions for Product of Array Except Self.
 */

/**
 * Approach: Two addition array one is Left, one is Right
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  const left = []
  const right = []
  const output = []

  left[0] = 1
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1]
  }

  right[nums.length - 1] = 1
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1]
  }

  for (let i = 0; i < nums.length; i++) {
    output[i] = left[i] * right[i]
  }

  return output
}
