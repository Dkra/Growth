/**
 * Brute Force solution.
 * Complexity: O(n^2)
 *
 * @param {Number[]} inputArray
 * @return {Number[]}
 */

const bfMaximumSubarray = arr => {
	let maxSubArr = []
	let headIdx
	let tailIdx
	let maxSum = Number.NEGATIVE_INFINITY
	let accumulator = 0
	if (arr.length <= 1) return arr
	for (let i = 0; i < arr.length; i++) {
		accumulator = 0
		for (let j = i; j < arr.length; j++) {
			accumulator = accumulator + arr[j]
			if (accumulator > maxSum) {
				maxSum = accumulator
				headIdx = i
				tailIdx = j
			}
		}
	}

	return arr.slice(headIdx, tailIdx + 1)
}

const findMaxCrossArr = (arr, head, mid, tail) => {
	let leftMaxSum = Math.NEGATIVE_INFINITY
	let rightMaxSum = Math.NEGATIVE_INFINITY
	let headIdx = null
	let tailIdx = null
	let accumulator = 0
	for (let i = mid; i >= head; i--) {
		accumulator += i
		if (accumulator >= leftMaxSum) {
			leftMaxSum = accumulator
		}
	}

	accumulator = 0
	for (let i = mid + 1; i <= tail; i++) {
		accumulator += i
		if (accumulator >= rightMaxSum) {
			rightMaxSum = accumulator
		}
	}
}

const dqMaximumSubarray = arr => {}

module.exports = dqMaximumSubarray
