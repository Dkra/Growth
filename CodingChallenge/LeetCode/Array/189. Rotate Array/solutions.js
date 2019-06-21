/* eslint-disable */
// https://leetcode.com/submissions/detail/229943982/

/**
 * Solutions A: Each time Rotate One Spot, k tims
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
var rotateA = function(nums, k) {
  if (nums.length <= 1) return
  k = k % nums.length

  for (let i = 0; i < k; i++) {
    rotateRightOneSpot(nums)
  }

  function rotateRightOneSpot(nums) {
    const last = nums[nums.length - 1]
    for (let i = nums.length - 1; i >= 1; i--) {
      nums[i] = nums[i - 1]
    }
    nums[0] = last
  }
  return nums
}

/**
 * Solutions B: Reverse 3 time, to make every element offset become the same to k
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
const rotateB = (nums, k) => {
  if (nums.length <= 1) return
  k %= nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)

  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp
      start++
      end--
    }
  }
  return nums
}
