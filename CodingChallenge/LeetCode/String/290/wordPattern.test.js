import wordPattern from './wordPattern'

test('problem', () => {
  expect(wordPattern('abba', 'dog cat cat dog')).toEqual(true)
  expect(wordPattern('abba', 'dog cat cat fish')).toEqual(false)
  expect(wordPattern('aaaa', 'dog cat cat dog')).toEqual(false)
  expect(wordPattern('abba', 'dog dog dog dog')).toEqual(false)

  // Edge Cases
  expect(wordPattern('abc', 'b c a')).toEqual(true)
  expect(wordPattern('ab', 'dog dog')).toEqual(false)
  expect(wordPattern('aaa', 'aa aa aa aa')).toEqual(false)
})
