/**
 * https://leetcode.com/problems/jump-game/
 */

/**
 * Runtime: 56 ms, faster than 95.68% of JavaScript online submissions for Jump Game.
Memory Usage: 35.7 MB, less than 51.99% of JavaScript online submissions for Jump Game.
 */

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/** Reflection:
 * keep tracking farestIdx (like road keep expanding if possible)
 * if current idx more than farestIdx, fail to go the end of index
 * (like road is not long enough, fall into the water)
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = nums => {
  if (nums.length === 1) return 0
  let range = 0
  let map = {}
  let nextIdx,
    nextIdxReach,
    counter = 0
  for (let i = 0; i < nums.length; ) {
    range = nums[i]
    map = {}
    counter++
    if (nums[i] + i >= nums.length - 1) return counter
    for (let j = i; j <= i + range && j < nums.length; j++) {
      map[j + nums[j]] = j
    }
    nextIdxReach = Math.max(...Object.keys(map))
    i = map[nextIdxReach]
    if (nextIdxReach >= nums.length - 1) return counter + 1
  }
}
module.exports = canJump
