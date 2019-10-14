import isAnagram from './isAnagram'

test('problem', () => {
  expect(isAnagram('anagram', 'nagaram')).toEqual(true)

  // Edge Cases
  //
  expect(isAnagram('aacc', 'ccac')).toEqual(false)
})
