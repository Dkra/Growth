/**
 * Runtime: 112 ms, faster than 83.80% of JavaScript online submissions for Array Partition I.
 * Memory Usage: 39.1 MB, less than 11.11% of JavaScript online submissions for Array Partition I.
 */

/**
 * Approach: Use Additional array to acheive sorted array, then iterate it
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let exist = []
  for (let i = 0; i < nums.length; i++) {
    // exist[]'s (index - 10000) ===  digit in nums[]
    // + 10000 make the most possible negitve number equals to 0,
    // so that can iterate exist[] from index 0
    exist[nums[i] + 10000] = (exist[nums[i] + 10000] || 0) + 1
  }

  // flag to control add or not 
  let odd = true
  let sum = 0
  for (let i = 0; i < exist.length; i++) {
    while (exist[i]) {
      if (odd) {
        sum += i - 10000
      }
      odd = !odd
      exist[i]--
    }
  }
  return sum
};
export default arrayPairSum