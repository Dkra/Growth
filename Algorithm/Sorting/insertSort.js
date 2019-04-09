/*
 * Insert Sort
 * https://zh.wikipedia.org/wiki/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F
 *
 * Worst Time Complexity: O(n^2)
 * Worst Space Complexity: O(1)
 */

const insertSort = arr => {
	let key, q, i
	for (q = 1; q < arr.length; q++) {
		key = arr[q]
		i = q - 1
		while (i >= 0 && arr[i] > key) {
			arr[i + 1] = arr[i]
			i--
		}
		arr[i + 1] = key
	}

	return arr
}

module.exports = insertSort
