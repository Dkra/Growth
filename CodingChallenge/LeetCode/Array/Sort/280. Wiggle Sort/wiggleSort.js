/**
 * https://leetcode.com/problems/wiggle-sort/
 */

/**
 * Runtime: 80 ms, faster than 86.42% of JavaScript online submissions for Wiggle Sort.
 * Memory Usage: 37.1 MB, less than 69.61% of JavaScript online submissions for Wiggle Sort.
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

const wiggleSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    if (i % 2 === 1 && nums[i] < nums[i - 1]) swap(nums, i, i - 1)
    if (i % 2 === 0 && nums[i] > nums[i - 1]) swap(nums, i, i - 1)
  }
  return nums
}

/**
 * Approach: Sort first
 * Time complexity: O(NlogN)
 * Space complexity: O(N)
 */

// const wiggleSort = nums => {
//   const sortedNums = nums.sort((a, b) => a - b)

//   for (let i = 1; i < sortedNums.length - 1; i = i + 2) {
//     swap(sortedNums, i, i + 1)
//   }
//   return sortedNums
// }

function swap(arr, a, b) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
module.exports = wiggleSort
