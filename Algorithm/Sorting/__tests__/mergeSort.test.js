const { mergeSort, merge } = require('../mergeSort')

test('merge function should reorder the array', () => {
	// merge function should be loop invariant
	// left part and right part should be ORDERED beforehand
	expect(merge([1, 2, -2, -1], 0, 1, 3)).toEqual([-2, -1, 1, 2])
	expect(merge([1, 2, 0], 0, 1, 2)).toEqual([0, 1, 2])
})

test.only('should sort two array in ascending order', () => {
	expect(mergeSort([3, 2, 1], 0, 2)).toEqual([1, 2, 3])

	expect(mergeSort([3, 2, 1], 0, 2)).toEqual([1, 2, 3])
	expect(mergeSort([3, 1, 2], 0, 2)).toEqual([1, 2, 3])

	expect(mergeSort([3, -1, 2], 0, 2)).toEqual([-1, 2, 3])
	expect(mergeSort([0, -1, 2], 0, 2)).toEqual([-1, 0, 2])

	expect(mergeSort([4, -1, -1, 2], 0, 3)).toEqual([-1, -1, 2, 4])
	expect(mergeSort([4, 3, 2, 1], 0, 3)).toEqual([1, 2, 3, 4])
	expect(mergeSort([5, 4, 3, 2, 1], 0, 4)).toEqual([1, 2, 3, 4, 5])
})
