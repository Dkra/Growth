const insertSort = require('../insertSort')

test('should sort array in ascending order', () => {
	expect(insertSort([3, 2, 1])).toEqual([1, 2, 3])
	expect(insertSort([3, 1, 2])).toEqual([1, 2, 3])

	expect(insertSort([3, -1, 2])).toEqual([-1, 2, 3])
	expect(insertSort([0, -1, 2])).toEqual([-1, 0, 2])

	expect(insertSort([4, -1, -1, 2])).toEqual([-1, -1, 2, 4])
})
