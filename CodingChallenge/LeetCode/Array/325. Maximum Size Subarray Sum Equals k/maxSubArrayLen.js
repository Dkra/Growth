/**
 * https://leetcode.com/problems/find-the-celebrity/
 */

/**
 * Runtime: 84 ms, faster than 72.32% of JavaScript online submissions for Maximum Size Subarray Sum Equals k.
 * Memory Usage: 42.7 MB, less than 20.71% of JavaScript online submissions for Maximum Size Subarray Sum Equals k.
 */

/**
 * Approach: Save every currSum to Map
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSubArrayLen = (nums, k) => {
  let maxLength = 0
  let currSum = 0
  let sumMap = {}

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i]
    if (sumMap[currSum] === undefined) sumMap[currSum] = i
    if (currSum === k) maxLength = i + 1
    else if (sumMap[currSum - k] !== undefined)
      maxLength = Math.max(maxLength, i - sumMap[currSum - k])
  }
  return maxLength
}
module.exports = maxSubArrayLen
