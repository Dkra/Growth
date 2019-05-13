/**
 * Divide and Conquer solution.
 * Complexity: O(NLogN)
 *
 * @param {Number[]} inputArray
 * @return {Number[]}
 */

const findMaxCrossArr = (arr, low, mid, high) => {
	let leftMaxSum = Number.NEGATIVE_INFINITY
	let rightMaxSum = Number.NEGATIVE_INFINITY
	let lowIdx = 0
	let highIdx = 0
	let accumulator = 0

	for (let i = mid; i >= low; i--) {
		accumulator += arr[i]
		if (accumulator >= leftMaxSum) {
			leftMaxSum = accumulator
			lowIdx = i
		}
	}

	accumulator = 0
	for (let i = mid + 1; i <= high; i++) {
		accumulator += arr[i]
		if (accumulator >= rightMaxSum) {
			rightMaxSum = accumulator
			highIdx = i
		}
	}

	return {
		low: lowIdx,
		high: highIdx,
		maxSum: leftMaxSum + rightMaxSum
	}
}

const dcMaximumSubarray = (arr, low = 0, high = arr.length - 1) => {
	if (arr.length === 0) return []

	if (low === high) {
		return {
			low: low,
			high: high,
			maxSum: arr[low]
		}
	} else {
		const mid = Math.floor((low + high) / 2)
		const leftObj = dcMaximumSubarray(arr, low, mid)
		const rightObj = dcMaximumSubarray(arr, mid + 1, high)
		const crossObj = findMaxCrossArr(arr, low, mid, high)

		let maxSumObj

		if (crossObj.maxSum >= rightObj.maxSum && crossObj.maxSum >= leftObj.maxSum) {
			maxSumObj = crossObj
		} else if (rightObj.maxSum >= leftObj.maxSum && rightObj.maxSum >= crossObj.maxSum) {
			maxSumObj = rightObj
		} else {
			maxSumObj = leftObj
		}

		return {
			...maxSumObj
		}
	}
}
module.exports = dcMaximumSubarray
