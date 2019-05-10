/**
 * Divide and Conquer solution.
 * Complexity: O(NLogN)
 *
 * @param {Number[]} inputArray
 * @return {Number[]}
 */

const findMaxCrossArr = (arr, head, mid, tail) => {
	let leftMaxSum = Number.NEGATIVE_INFINITY
	let rightMaxSum = Number.NEGATIVE_INFINITY
	let maxLeftIdx = null
	let maxRightIdx = null
	let accumulator = 0
	for (let i = mid; i >= head; i--) {
		accumulator += arr[i]
		if (accumulator >= leftMaxSum) {
			leftMaxSum = accumulator
			maxLeftIdx = i
		}
	}

	accumulator = 0
	for (let i = mid + 1; i <= tail; i++) {
		accumulator += arr[i]
		if (accumulator >= rightMaxSum) {
			rightMaxSum = accumulator
			maxRightIdx = i
		}
	}

	return {
		low: maxLeftIdx,
		high: maxRightIdx,
		maxSum: leftMaxSum + rightMaxSum
	}
}

const dcMaximumSubarray = (arr, low = 0, high = arr.length - 1) => {
	if (arr.length === 0) return []
	if (low === high) {
		return {
			low,
			high,
			maxSum: arr[low]
		}
	} else {
		const mid = Math.floor((low + high) / 2)
		const leftObj = dcMaximumSubarray(arr, low, mid)
		const rightObj = dcMaximumSubarray(arr, mid + 1, high)
		const crossObj = findMaxCrossArr(arr, low, mid, high)

		let maxObj
		if (
			crossObj.maxSum >= rightObj.maxSum &&
			crossObj.maxSum >= leftObj.maxSum
		) {
			maxObj = crossObj
		} else if (
			rightObj.maxSum >= leftObj.maxSum &&
			rightObj.maxSum >= crossObj.maxSum
		) {
			maxObj = rightObj
		} else {
			maxObj = leftObj
		}
		return {
			low: maxObj.low,
			high: maxObj.high,
			maxSum: maxObj.maxSum
		}
	}
}

module.exports = dcMaximumSubarray
