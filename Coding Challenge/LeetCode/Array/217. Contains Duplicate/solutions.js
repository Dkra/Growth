/* eslint-disable */
// https://leetcode.com/submissions/detail/229943982/

/*
  Approach #2 (Sorting First)
  https://leetcode.com/problems/contains-duplicate/solution/
 */

const containsDuplicate = nums => {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true
  }
  return false
}
