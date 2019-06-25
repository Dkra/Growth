/**
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 */

/**
 * Runtime: 60 ms, faster than 80.00% of JavaScript online submissions for Minimum Size Subarray Sum.
Memory Usage: 35.5 MB, less than 64.31% of JavaScript online submissions for Minimum Size Subarray Sum.
 */

/**
 * Approach: leftPtr + dynamicSlideWindowSum (Two pointer)
 * When windowSum >=s, leftPtr++ and remove value from left
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (s, nums) => {
  let windowSum = 0
  let leftPtr = 0
  let minLen = Number.POSITIVE_INFINITY
  for (let i = 0; i < nums.length; i++) {
    windowSum += nums[i]
    while (windowSum >= s) {
      minLen = Math.min(minLen, i - leftPtr + 1)
      windowSum -= nums[leftPtr++]
    }
  }
  return minLen === Number.POSITIVE_INFINITY ? 0 : minLen
}
module.exports = minSubArrayLen
