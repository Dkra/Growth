/**
 * Brute Force solution.
 * Complexity: O(n^2)
 *
 * @param {Number[]} inputArray
 * @return {Number[]}
 */

const bfMaximumSubarray = arr => {
	if (arr.length === 0) return []
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

module.exports = bfMaximumSubarray
