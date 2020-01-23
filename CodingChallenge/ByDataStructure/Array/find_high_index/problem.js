/**
 * Approach: Binary search, return last high position if is equals to key
 * Time complexity: O(logN)
 * Space complexity: O(1)
 */

let find_high_index = function(arr, key) {
  let low = 0
  let high = arr.length - 1
  let mid
  while (low <= high) {
    mid = Math.floor((low + high) / 2)

    if (arr[mid] > key) high = mid - 1
    else if (arr[mid] <= key) low = mid + 1
  }

  return arr[high] === key ? high : -1
}

export default [find_high_index]
