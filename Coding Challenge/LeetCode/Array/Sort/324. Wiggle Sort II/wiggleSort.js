/**
 * https://leetcode.com/problems/wiggle-sort-ii/
 */

/**
 * Runtime: 116 ms, faster than 41.67% of JavaScript online submissions for Wiggle Sort II.
 * Memory Usage: 38.9 MB, less than 75.00% of JavaScript online submissions for Wiggle Sort II.
 */

/**
 * Approach: One-pass Swap
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// const wiggleSort = nums => {
//   for (let i = 1; i < nums.length; i++) {
//     if (i % 2 === 1 && nums[i] < nums[i - 1]) swap(nums, i, i - 1)
//     if (i % 2 === 0 && nums[i] > nums[i - 1]) swap(nums, i, i - 1)
//   }
//   return nums
// }

/**
 * Not meet criteria
 * Approach: Clone and Sort Cloned Array, use two pointer
 * mid, right
 * Time complexity: O(NlogN)
 * Space complexity: O(N)
 */

const wiggleSort = nums => {
  const sortedNums = nums.map(a => a).sort((a, b) => a - b)
  let mid = Math.ceil(nums.length / 2) - 1
  let right = sortedNums.length - 1

  for (let i = 0; i < sortedNums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = sortedNums[mid]
      mid--
    } else {
      nums[i] = sortedNums[right]
      right--
    }
  }
  return nums
}

module.exports = wiggleSort
