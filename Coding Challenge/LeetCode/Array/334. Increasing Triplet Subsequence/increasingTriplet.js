/**
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 */

/**
 * Runtime: 60 ms, faster than 81.85% of JavaScript online submissions for Increasing Triplet Subsequence.
 * Memory Usage: 35.1 MB, less than 23.73% of JavaScript online submissions for Increasing Triplet Subsequence.
 */

/**
 * Approach: Fill Two slots
 * if two slots filled already, then the next number bigger than slot1 & slot2
 * that means increasingTriplet exist!
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = nums => {
  let slot1 = Infinity
  let slot2 = Infinity
  for (let n of nums) {
    if (n <= slot1) slot1 = n
    else if (n <= slot2) slot2 = n
    else return true
  }
  return false
}
module.exports = increasingTriplet
