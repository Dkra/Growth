/**
 * https://leetcode.com/problems/first-missing-positive/
 */

/**
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = nums => {
  if (nums.length === 0) return 1
  if (nums.length === 1) {
    /*
     if (1 not exist), return 1
     else (1 exist) return 2
    */
    return nums[0] <= 0 || nums[0] >= 2 ? 1 : 2
  }
  const hashMap = {}
  let missingNum = null
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) continue
    hashMap[nums[i]] = true
  }

  // Misssing num must be found in num.length + 1 iteratation
  // e.g [3,4] => 1
  // e.g [1,3] => 2
  // e.g [1,2] => 3 , let's why n+1
  for (let i = 1; i <= nums.length + 1; i++) {
    if (hashMap[i] === undefined) {
      missingNum = i
      break
    }
  }

  return missingNum
}

module.exports = firstMissingPositive
