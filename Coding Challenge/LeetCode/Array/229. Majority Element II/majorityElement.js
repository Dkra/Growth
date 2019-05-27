/**
 * https://leetcode.com/problems/majority-element-ii/
 */

/**
 * Reflection: Memory Usage is a bit slow, but still in constant time
 * Runtime: 56 ms, faster than 98.65% of JavaScript online submissions for Majority Element II.
 * Memory Usage: 38.8 MB, less than 6.50% of JavaScript online submissions for Majority Element II.
 */

/**
 * Solutions: 抵銷 Boyer-Moore Majority Vote algorithm
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = nums => {
  if (nums.length <= 1) return nums
  const criteria = Math.floor(nums.length / 3)
  let num1 = NaN // candidate1
  let num1Counter = 0
  let num2 = NaN // candidate2
  let num2Counter = 0
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    if (num1 === nums[i]) {
      num1Counter++
    } else if (num2 === nums[i]) {
      num2Counter++
    } else if (num2Counter === 0) {
      num2 = nums[i]
      num2Counter = 1
    } else if (num1Counter === 0) {
      num1 = nums[i]
      num1Counter = 1
    } else {
      num1Counter--
      num2Counter--
    }
  }
  if (nums.filter(num => num === num1).length > criteria) arr.push(num1)
  if (nums.filter(num => num === num2).length > criteria) arr.push(num2)

  return arr
}

module.exports = majorityElement
