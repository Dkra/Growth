/**
 * https://leetcode.com/problems/majority-element/
 */

/**
 * Reflection: Check solution same concept but simpler code
 * Runtime: 60 ms, faster than 97.47% of JavaScript online submissions for Majority Element.
 * Memory Usage: 37.4 MB, less than 64.45% of JavaScript online submissions for Majority Element.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  if (nums.length === 1) return nums[0]
  const majorityCriteria = Math.floor(nums.length / 2) + 1
  const hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1
  }

  for (let key in hashMap) {
    if (hashMap[key] >= majorityCriteria) return parseInt(key)
  }
}

module.exports = majorityElement
