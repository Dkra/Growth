/**
 * Approach: Binary search, return last low position
 * Time complexity: O(logN)
 * Space complexity: O(1)
 */

let find_low_index = function(arr, key) {
  let low = 0
  let high = arr.length - 1
  let mid
  while (low <= high) {
    // equal will do on overlap position
    mid = Math.floor((low + high) / 2)
    if (arr[mid] < key) low = mid + 1
    else if (arr[mid] >= key) high = mid - 1
  }

  return arr[low] === key ? low : -1 // is LAST low position equals to key
}

export default [find_low_index]
