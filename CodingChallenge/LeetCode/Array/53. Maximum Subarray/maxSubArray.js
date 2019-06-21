/**
 * https://leetcode.com/problems/maximum-subarray/
 */

/**
 * Runtime: 64 ms, faster than 74.57 % of JavaScript online submissions for Maximum Subarray.
 * Memory Usage: 35.2 MB, less than 56.47 % of JavaScript online submissions for Maximum Subarray.
 */

/**
 * Approach: DP
 * update current nums[i] value conditionaly:
 * if (nums[i - 1] > 0) nums[i] += nums[i - 1]
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = nums => {
  if (nums.length === 0) return 0
  let maxSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) nums[i] += nums[i - 1]
    maxSum = Math.max(maxSum, nums[i])
  }
  return maxSum
}

module.exports = maxSubArray
