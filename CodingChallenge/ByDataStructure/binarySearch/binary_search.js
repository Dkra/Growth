/**
 * Approach: Divide and Conquer by recursive
 * Time complexity: O(logN)
 * Space complexity: O(logN)
 */

//a is sorted array
let binary_search_recursive = function(a, key, low = 0, high = a.length - 1) {
  if (low > high) {
    return -1
  } else {
    let mid = Math.floor((low + high) / 2)
    if (key < a[mid]) return binary_search_recursive(a, key, low, mid - 1)
    else if (key > a[mid]) return binary_search_recursive(a, key, mid + 1, high)
    else return mid
  }
}

/**
 * Approach: Binary Search
 * Time complexity: O(logN)
 * Space complexity: O(1)
 */
let binary_search = function(a, key) {
  let low = 0
  let high = a.length - 1
  let mid
  while (low <= high) {
    mid = Math.floor((low + high) / 2)

    if (key < a[mid]) high = mid - 1
    else if (key > a[mid]) low = mid + 1
    else return mid
  }
  return -1
}

export default [binary_search_recursive, binary_search]
