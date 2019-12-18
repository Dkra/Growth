import longestCommonPrefix from './longestCommonPrefix'

test('problem', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')

  // Edge Cases
  expect(longestCommonPrefix([])).toEqual('')
  expect(longestCommonPrefix(['a', 'abc', 'abc'])).toEqual('a')
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('')
  expect(longestCommonPrefix(['dog', 'racecar', ''])).toEqual('')
})
