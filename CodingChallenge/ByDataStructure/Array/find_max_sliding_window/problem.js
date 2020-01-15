/**
 * Approach: slide window
 * Time complexity: O(N) - Every element is pushed and popped from the deque only once in a single traversal
 * Space complexity: O(w) - window size
 */

let find_max_sliding_window = function(arr, window_size) {
  var result = []
  let winArr = [] // put index

  for (let i = 0; i < arr.length; i++) {
    // whenever current number bigger than last item in window, pop it
    while (winArr.length > 0 && arr[i] > arr[winArr[winArr.length - 1]]) {
      winArr.pop()
    }
    winArr.push(i)

    // if winArr[0] outof window_size range, shift it
    if (winArr.length > 0 && window_size <= i - winArr[0]) winArr.shift()

    // push started from window is full
    if (i >= window_size - 1) result.push(arr[winArr[0]])
  }

  return result
}

export default [find_max_sliding_window]
