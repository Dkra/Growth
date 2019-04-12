/*
 * Merge Sort
 * https://en.wikipedia.org/wiki/Merge_sort
 *
 * Worst Time Complexity: O(nlogn)
 * Worst Space Complexity: O(n)
 */

const mergeSort = (arr, head, tail) => {
	if (head < tail) {
		const mid = Math.floor((tail + head) / 2)
		mergeSort(arr, head, mid)
		mergeSort(arr, mid + 1, tail)
		merge(arr, head, mid, tail)
	}

	return arr
}

function merge(arr, head, mid, tail) {
	const arrLeft = arr.slice(head, mid + 1)
	const arrRight = arr.slice(mid + 1, tail + 1)

	let leftPointer = (rightPointer = 0)

	for (let i = 0; i < tail - head + 1; i++) {
		// leftArr exhausted (insert rightArr value)
		if (leftPointer === arrLeft.length) {
			arr[head + i] = arrRight[rightPointer]
			rightPointer++

			// rightArr exhausted (insert leftArr value)
		} else if (rightPointer === arrRight.length) {
			arr[head + i] = arrLeft[leftPointer]
			leftPointer++

			// leftNumber <= rightNumber
		} else if (arrLeft[leftPointer] <= arrRight[rightPointer]) {
			arr[head + i] = arrLeft[leftPointer]
			leftPointer++

			// leftNumber > rightNumber
		} else {
			arr[head + i] = arrRight[rightPointer]
			rightPointer++
		}
	}

	return arr
}

module.exports = {
	mergeSort,
	merge
}
