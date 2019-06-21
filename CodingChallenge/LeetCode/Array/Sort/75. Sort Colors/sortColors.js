/**
 * https://leetcode.com/problems/sort-colors/
 */

/**
 * Runtime: 68 ms, faster than 21.02% of JavaScript online submissions for Sort Colors.
 * Memory Usage: 33.9 MB, less than 31.27% of JavaScript online submissions for Sort Colors.
 */

/**
 * Approach: Three Way Partition (Dutch National Flag Problem)
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
  let curr = 0
  let ptr1 = 0
  let ptr2 = nums.length - 1
  let temp

  while (curr <= ptr2) {
    if (nums[curr] === 0) {
      temp = nums[curr]
      nums[curr++] = nums[ptr1]
      nums[ptr1++] = temp
    } else if (nums[curr] === 2) {
      temp = nums[curr]
      nums[curr] = nums[ptr2]
      nums[ptr2--] = temp
    } else {
      curr++
    }
  }
  return nums
}
module.exports = sortColors
