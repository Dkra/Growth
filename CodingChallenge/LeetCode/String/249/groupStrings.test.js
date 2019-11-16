import groupStrings from './groupStrings'
import _ from 'lodash'
test('problem', () => {
  const test = (arr, answer) => {
    const result = groupStrings(arr)
    const isEqual = result.every(arr => answer.some(ans => _.isEqual(ans, arr)))
    return isEqual
  }
  expect(
    test(
      ['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z'],
      [['abc', 'bcd', 'xyz'], ['az', 'ba'], ['acef'], ['a', 'z']]
    )
  ).toEqual(true)

  // Edge Cases
  // expect(groupStrings()).toEqual()
})
