import arrayPairSum from './arrayPairSum'

test('problem', () => {
  expect(arrayPairSum([1, 4, 3, 2])).toEqual(4)

  // Edge Cases
  // expect(arrayPairSum([-470, 66, -4835, -5623])).toEqual(-6093)
  expect(arrayPairSum([1, 2, 3, 2])).toEqual(3)
  expect(arrayPairSum([0, 0, 0, 0])).toEqual(0)
  expect(arrayPairSum([1, 1])).toEqual(1)
  expect(arrayPairSum([])).toEqual(0)
})
