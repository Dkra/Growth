import isOneEditDistance from './isOneEditDistance'

test('problem', () => {
  expect(isOneEditDistance('ab', 'acb')).toEqual(true)
  expect(isOneEditDistance('cab', 'ad')).toEqual(false)
  expect(isOneEditDistance('1203', '1213')).toEqual(true)
  expect(isOneEditDistance('a', '')).toEqual(true)
  expect(isOneEditDistance('a', 'b')).toEqual(true)

  // Edge Cases
  expect(isOneEditDistance('', '')).toEqual(false) // true <= need ONE EDIT APART
  expect(isOneEditDistance('a', 'a')).toEqual(false) // true <= need ONE EDIT APART
})
