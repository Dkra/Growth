/* eslint-disable */
// https://leetcode.com/submissions/detail/229943982/

/**
 * Solutions: Use Map
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = new Map()

  nums.forEach(n => map.set(n, (map.get(n) || 0) + 1))

  for (let [key, val] of map) {
    if (val > nums.length / 2) return key
  }
}
