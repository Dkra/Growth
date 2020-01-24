/**
 * Approach: read/write pointer from right to left
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
let move_zeros_to_left = function(arr) {
  let read = arr.length - 1
  let write = arr.length - 1

  // eslint-disable-next-line for-direction
  while (read >= 0) {
    if (arr[read] !== 0) {
      arr[write] = arr[read]
      write--
    }
    read--
  }

  // since we already read & written all non-0, then we can fill the rest as 0
  while (write >= 0) {
    arr[write] = 0
    write--
  }
  return arr
}
export default [move_zeros_to_left]
