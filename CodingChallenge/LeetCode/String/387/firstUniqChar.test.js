import firstUniqChar from './firstUniqChar'

test('problem', () => {
  expect(firstUniqChar('leetcode')).toEqual(0)
  expect(firstUniqChar('loveleetcode')).toEqual(2)

  // Edge Cases
  expect(firstUniqChar('ss')).toEqual(-1)
})
