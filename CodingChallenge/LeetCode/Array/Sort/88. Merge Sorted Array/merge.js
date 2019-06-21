/**
 * https://leetcode.com/problems/merge-sorted-array
 */

/**
 * Runtime: 60 ms, faster than 74.55% of JavaScript online submissions for Merge Sorted Array.
 * Memory Usage: 33.9 MB, less than 66.80% of JavaScript online submissions for Merge Sorted Array.
 */

/**
 * Approach: Two pointer & fill num1 by backwards
 * Compare from right hand side (biggest number)
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  let ptr1 = m - 1
  let ptr2 = n - 1

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (ptr2 < 0 || nums1[ptr1] >= nums2[ptr2]) {
      nums1[i] = nums1[ptr1]
      ptr1--
    } else {
      nums1[i] = nums2[ptr2]
      ptr2--
    }
  }
  return nums1
}

module.exports = merge
