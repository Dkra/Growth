/**
 * Approach: declear a new array
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

let rotate_array = function(arr, n) {
  if (arr.length <= 1) return arr
  let rotatedArr = []

  for (let i = 0; i < arr.length; i++) {
    // (current idx + n) % arr.length => new position
    rotatedArr[(i + n) % arr.length] = arr[i]
  }

  return rotatedArr
}

/**
 * Approach: rotate 3 times(rotate all, rotate 0 ~ n-1, rotate n ~ arr.length-1)
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

let rotate_array_3times = function(arr, n) {
  if (arr.length <= 1) return arr
  const rotateUtils = (arr, start, end) => {
    let temp
    while (start < end) {
      temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp
      start++
      end--
    }
  }
  rotateUtils(arr, 0, arr.length - 1)
  rotateUtils(arr, 0, (n % arr.length) - 1)
  rotateUtils(arr, n % arr.length, arr.length - 1)
  return arr
}

export default [rotate_array, rotate_array_3times]
