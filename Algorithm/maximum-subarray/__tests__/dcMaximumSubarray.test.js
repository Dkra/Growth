const dcMaximumSubarray = require('../dcMaximumSubarray')

test('should find maximum subarray using divide and conquer algorithm', () => {
	expect(dcMaximumSubarray([])).toEqual([])
	expect(dcMaximumSubarray([0, 0])).toEqual({
		low: 0,
		high: 1,
		maxSum: 0
	})
	expect(dcMaximumSubarray([0, 0, 1])).toEqual({
		low: 0,
		high: 2,
		maxSum: 1
	})

	expect(dcMaximumSubarray([0, 0, 1, 2])).toEqual({
		low: 0,
		high: 3,
		maxSum: 3
	})
	expect(dcMaximumSubarray([0, 0, -1, 2])).toEqual({
		low: 3,
		high: 3,
		maxSum: 2
	})
	expect(dcMaximumSubarray([-1, -2, -3, -4, -5])).toEqual({
		low: 0,
		high: 0,
		maxSum: -1
	})
	expect(dcMaximumSubarray([1, 2, 3, 2, 3, 4, 5])).toEqual({
		low: 0,
		high: 6,
		maxSum: 20
	})
	expect(dcMaximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual({
		low: 3,
		high: 6,
		maxSum: 6
	})
	expect(dcMaximumSubarray([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual({
		low: 2,
		high: 6,
		maxSum: 7
	})
	expect(dcMaximumSubarray([1, -3, 2, -5, 7, 6, -1, 4, 11, -23])).toEqual({
		low: 4,
		high: 8,
		maxSum: 27
	})
})
