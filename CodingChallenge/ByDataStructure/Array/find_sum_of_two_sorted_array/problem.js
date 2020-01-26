/**
 * Approach: Two pointer from two side move to middle
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
let find_sum_of_two_sorted_arr = function(arr, val) {
  let left = 0
  let right = arr.length - 1
  let sum
  // do until two pointer met
  while (left !== right) {
    sum = arr[left] + arr[right]
    if (sum > val) right--
    else if (sum < val) left++
    else return true // sum === val
  }
  return false
}
export default [find_sum_of_two_sorted_arr]
