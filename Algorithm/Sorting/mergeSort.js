/*
 * Merge Sort
 * https://en.wikipedia.org/wiki/Merge_sort
 *
 * Worst Time Complexity: O(nlogn)
 * Worst Space Complexity: O(n)
 */

const mergeSort = (arr, head, tail) => {
	if (head < tail) {
		const mid = Math.floor((head + tail) / 2)
		mergeSort(arr, head, mid)
		mergeSort(arr, mid + 1, tail)
		merge(arr, head, mid, tail)
	}
	return arr
}

function merge(arr, head, mid, tail) {
	const cloneLeft = arr.slice(head, mid + 1) // slice from head to mid element
	const cloneRight = arr.slice(mid + 1, tail + 1) // slice from mid+1 to tail
	let lPointer = 0
	let rPointer = 0

	// Iterate from [head] slots to [tail] slots
	for (let i = head; i <= tail; i++) {
		if (lPointer === cloneLeft.length) {
			arr[i] = cloneRight[rPointer]
			rPointer++
		} else if (rPointer === cloneRight.length) {
			arr[i] = cloneLeft[lPointer]
			lPointer++
		} else if (cloneLeft[lPointer] <= cloneRight[rPointer]) {
			arr[i] = cloneLeft[lPointer]
			lPointer++
		} else {
			arr[i] = cloneRight[rPointer]
			rPointer++
		}
	}
	const reorderArr = arr.slice(head, tail + 1)
	return reorderArr
}

module.exports = {
	mergeSort,
	merge
}
