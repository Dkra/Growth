import twoSum from './twoSum'

test('problem', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])

  // Edge Cases
  expect(twoSum([0, 0, 1], 0)).toEqual([0, 1])
})
