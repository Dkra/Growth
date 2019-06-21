/**
 * https://leetcode.com/problems/container-with-most-water/
 */

/**
 * Runtime: 56 ms, faster than 95.50% of JavaScript online submissions for Container With Most Water.
 * Memory Usage: 35.8 MB, less than 18.68% of JavaScript online submissions for Container With Most Water.
 */

/**
 * Aproach: Two pointer start from left & right to middle
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} height
 * @return {number}
 */

const maxArea = height => {
  let lIdx = 0
  let rIdx = height.length - 1
  let maxArea = 0
  while (lIdx !== rIdx) {
    maxArea = Math.max(maxArea, Math.min(height[lIdx], height[rIdx]) * (rIdx - lIdx))
    if (height[lIdx] > height[rIdx]) rIdx--
    else lIdx++
  }
  return maxArea
}

module.exports = maxArea
