/**
 * https://leetcode.com/problems/wiggle-subsequence/
 */

/**
 * Runtime: 52 ms, faster than 85.71% of JavaScript online submissions for Wiggle Subsequence.
 * Memory Usage: 34 MB, less than 17.02% of JavaScript online submissions for Wiggle Subsequence
 */

/**
 * Approach:
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = nums => {
  let down = 1
  let up = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 0) up = down + 1
    else if (nums[i] - nums[i - 1] < 0) down = up + 1
  }
  return Math.max(down, up)
}
module.exports = wiggleMaxLength
