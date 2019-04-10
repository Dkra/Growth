/*
 * Selection Sort
 * https://en.wikipedia.org/wiki/Selection_sort
 *
 * Worst Time Complexity: O(n^2)
 * Worst Space Complexity: O(1)
 */

const selectionSort = arr => {
	let i, j, minIndex, temp

	for (i = 0; i < arr.length - 1; i++) {
		minIndex = i

		// find min
		for (j = i; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}

		// swap
		temp = arr[i]
		arr[i] = arr[minIndex]
		arr[minIndex] = temp
	}

	return arr
}

module.exports = selectionSort
