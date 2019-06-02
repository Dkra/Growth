/* eslint-disable */
// https://leetcode.com/submissions/detail/229943982/

/**
 * Best Solutions:
 *  when meet same digit counter++ otherwise --
 *  Since majority at least more than half, majority num will last until the end (at least 1)
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
const majorityElement = nums => {
  let majority = nums[0]
  let counter = 1

  for (let i = 0; i < nums.length; i++) {
    if (counter === 0) {
      majority = nums[i]
    } else if (nums[i] === majority) {
      counter++
    } else {
      counter--
    }
  }
  return majority
}

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
