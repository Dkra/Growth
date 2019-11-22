import countAndSay from './countAndSay'

test('problem', () => {
  expect(countAndSay(1)).toEqual("1")
  expect(countAndSay(4)).toEqual("1211")

  // Edge Cases
  expect(countAndSay(0)).toEqual("1")
})
