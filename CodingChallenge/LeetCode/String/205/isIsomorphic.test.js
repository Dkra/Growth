import isIsomorphic from './isIsomorphic'

test('problem', () => {
  // Note: You may assume both s and t have the same length.
  // expect(isIsomorphic('egg', 'add')).toEqual(true)
  // expect(isIsomorphic('foo', 'bar')).toEqual(false)

  // Edge Cases
  // expect(isIsomorphic('paper', 'title')).toEqual(true)

  // 這是因為除了字元是一對一映射之外，對應的字元也必須出現在相同位置
  // this failed, cuz a already map to b, but third a failed to map to a
  expect(isIsomorphic('aba', 'baa')).toEqual(false)
})
