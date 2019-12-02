import removeDuplicateLetters from './removeDuplicateLetters'

test('problem', () => {
  // 找到不重複 且 找到[英文字典順序] 最小的字串
  expect(removeDuplicateLetters('bcabc')).toEqual('abc')
  expect(removeDuplicateLetters('bbcaac')).toEqual('bac')
  expect(removeDuplicateLetters('cbacdcbc')).toEqual('acdb')
  expect(removeDuplicateLetters('cdac')).toEqual('cda')
  // Edge Cases
  expect(removeDuplicateLetters('aaa')).toEqual('a')
})
