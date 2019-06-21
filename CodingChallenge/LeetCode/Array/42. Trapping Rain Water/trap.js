/**
 * https://leetcode.com/problems/trapping-rain-water/
 */

/**
 * Runtime: 64 ms, faster than 86.25% of JavaScript online submissions for Trapping Rain Water.
 * Memory Usage: 35.2 MB, less than 66.03% of JavaScript online submissions for Trapping Rain Water.
 */

/**
 * Approach: Two pointer
 * water capacity depend on short side,
 * when leftMax < rightMax, left move forwards, vise versa.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
  if (height.length === 0 && height) return 0
  let leftMax = 0
  let rightMax = 0
  let container = 0
  for (let left = 0, right = height.length - 1; left != right; ) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])

    if (leftMax < rightMax) {
      container += leftMax - height[left]
      left++
    } else {
      container += rightMax - height[right]
      right--
    }
  }
  return container
}

module.exports = trap
