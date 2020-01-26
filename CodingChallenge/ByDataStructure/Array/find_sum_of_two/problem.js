/**
 * Approach: Hash map
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
let find_sum_of_two = function(arr, val) {
  const hashmap = {}
  for (let i = 0; i < arr.length; i++) {
    if (hashmap[val - arr[i]]) return true
    if (hashmap[arr[i]] === undefined) hashmap[arr[i]] = true
  }

  return false
}
export default [find_sum_of_two]
