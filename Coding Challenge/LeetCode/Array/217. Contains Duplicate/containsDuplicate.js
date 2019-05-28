/**
 * https:eetcode.com/problems/contains-duplicate/
 */

/**
 * Runtime: 64 ms, faster than 95.86% of JavaScript online submissions for Contains Duplicate.
 * Memory Usage: 42.3 MB, less than 33.15% of JavaScript online submissions for Contains Duplicate.
 */

/**
 * Reflection: with HeapSort pre-process, space complexity can be O(1)
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = nums => {
  let record = {}
  for (let i = 0; i < nums.length; i++) {
    if (record[nums[i]]) return true
    record[nums[i]] = true
  }
  return false
}

module.exports = containsDuplicate
