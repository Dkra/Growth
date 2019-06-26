/**
 * https://leetcode.com/problems/maximum-product-subarray/
 */

/**
 * Runtime: 56 ms, faster than 91.38% of JavaScript online submissions for Maximum Product Subarray.
 * Memory Usage: 34.9 MB, less than 85.48% of JavaScript online submissions for Maximum Product Subarray.
 */

/**
 * Approach: three states: MaxSum, currMaxSum(+num), currMinSum(-num)
 * Swap when curr[i] is negative
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

const maxProduct = nums => {
  let maxSum = nums[0]
  let currMaxSum = nums[0]
  let currMinSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    // if curr[i] negative, need swap
    if (nums[i] < 0) {
      const temp = currMaxSum
      currMaxSum = currMinSum
      currMinSum = temp
    }
    currMaxSum = Math.max(nums[i], currMaxSum * nums[i]) // Positive
    currMinSum = Math.min(nums[i], currMinSum * nums[i]) // Negative

    maxSum = Math.max(maxSum, currMaxSum)
  }
  return maxSum
}

module.exports = maxProduct
