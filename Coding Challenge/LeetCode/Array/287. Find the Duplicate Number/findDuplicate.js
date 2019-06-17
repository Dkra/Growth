/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 */

/**
 * Runtime: 56 ms, faster than 92.78% of JavaScript online submissions for Find the Duplicate Number.
 * Memory Usage: 35.3 MB, less than 96.01% of JavaScript online submissions for Find the Duplicate Number.
 */

/**
 * Approach:
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * Reflection: Two pointer (Fast & Slow), Link-list-Cycle ||: Find the entry point of Linked list has loop
 * Stage 1: Find intersection with two pointer fast & slow
 * Stage 2: From Start & Intersection point moving forard until the same
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = nums => {
  // Find the intersection point of the two runners.
  let tortoise = nums[0]
  let hare = nums[0]
  do {
    tortoise = nums[tortoise]
    hare = nums[nums[hare]]
  } while (tortoise != hare)

  // Find the "entrance" to the cycle.
  let ptr1 = nums[0] // start point
  let ptr2 = hare // intersection point
  while (ptr1 != ptr2) {
    ptr1 = nums[ptr1]
    ptr2 = nums[ptr2]
  }

  return ptr1
}

module.exports = findDuplicate
