import canConstruct from './canConstruct'

test('problem', () => {
  expect(canConstruct('a', 'b')).toEqual(false)
  expect(canConstruct('aa', 'ab')).toEqual(false)

  expect(canConstruct('a', 'abc')).toEqual(true)
  expect(canConstruct('a', 'aab')).toEqual(true)

  // Edge Cases
  // expect(canConstruct()).toEqual()
})
