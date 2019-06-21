/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  let i = 0
  let isDuplicate = false
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
      isDuplicate = false
    } else {
      if (isDuplicate) continue
      i++
      nums[i] = nums[j]
      isDuplicate = true
    }
  }
  // return i + 1
  return nums.slice(0, i + 1) // for test

  /** Thoughts:
   *  The same like 26. just add a flag variable (isDuplicate) to verify is it already duplicated
   *  If yes: not allow to set value
   *  If no: set value and change the flag to true
   */
}

module.exports = removeDuplicates
