/* eslint-disable */

/**
 * Runtime: 64 ms, faster than 74.57 % of JavaScript online submissions for Maximum Subarray.
 * Memory Usage: 35.2 MB, less than 56.47 % of JavaScript online submissions for Maximum Subarray.
 */

/**
 * Approach: Greedy
 * Initialize:
 *    currMaxStreak = maxStreak = nums[0]
 *
 * Start: From index 1
 *    // streak reset to current number nums[i] when steak + current number (nums[i]) become smaller
 *    CurrentMaxStreak: Math.max(nums[i], currMaxStreak + nums[i])
 *
 *    // Keep tracking maxstreak
 *    maxStreak = Math.max(maxStreak, currMaxStreak)
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = nums => {
  if (nums.length === 0) return 0
  let currMaxStreak = nums[0]
  let maxStreak = nums[0]

  for (let i = 1; i < nums.length; i++) {
    currMaxStreak = Math.max(nums[i], currMaxStreak + nums[i])
    maxStreak = Math.max(maxStreak, currMaxStreak)
  }
  return maxStreak
}

/**
 * Runtime: 68 ms, faster than 34.05% of JavaScript online submissions for Maximum Subarray.
 * Memory Usage: 35.5 MB, less than 21.34% of JavaScript online submissions for Maximum Subarray.
 */

/**
 * Approach: Divide and Conquer
 * Time complexity: O(NlogN)
 * Space complexity: O(logN) To Keep the recursion stack
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = (nums, start = 0, end = nums.length - 1) => {
  if (start === end) return nums[start]
  else {
    const mid = Math.floor((start + end) / 2)
    const leftSum = maxSubArray(nums, start, mid)
    const rightSum = maxSubArray(nums, mid + 1, end)
    const crossSum = crossSumFunc(nums, start, mid, end)

    return Math.max(leftSum, rightSum, crossSum)
  }

  function crossSumFunc(nums, start, mid, end) {
    let leftMaxSum = Number.NEGATIVE_INFINITY
    let rightMaxSum = Number.NEGATIVE_INFINITY
    let accumulator = 0

    for (let i = mid; i >= start; i--) {
      accumulator += nums[i]
      leftMaxSum = Math.max(leftMaxSum, accumulator)
    }

    accumulator = 0

    for (let i = mid + 1; i <= end; i++) {
      accumulator += nums[i]
      rightMaxSum = Math.max(rightMaxSum, accumulator)
    }

    return leftMaxSum + rightMaxSum
  }
}
