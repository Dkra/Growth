const selectionSort = require('../selectionSort')

test('should sort array in ascending order', () => {
	expect(selectionSort([3, 2, 1])).toEqual([1, 2, 3])
	expect(selectionSort([3, 1, 2])).toEqual([1, 2, 3])

	expect(selectionSort([3, -1, 2])).toEqual([-1, 2, 3])
	expect(selectionSort([0, -1, 2])).toEqual([-1, 0, 2])

	expect(selectionSort([4, -1, -1, 2])).toEqual([-1, -1, 2, 4])
})
