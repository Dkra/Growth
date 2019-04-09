const insertSort = require('../insertSort')

test('should sort [3,2,1] become [1,2,3]', () => {
	expect(insertSort([3, 2, 1])).toEqual([1, 2, 3])
})
