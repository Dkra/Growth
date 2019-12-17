import convertToTitle from './convertToTitle'

test('problem', () => {
  expect(convertToTitle(1377)).toEqual('AZY') // 1 * 26**2 + 701 = A ZY
  expect(convertToTitle(701)).toEqual('ZY')
  expect(convertToTitle(28)).toEqual('AB')
  expect(convertToTitle(1)).toEqual('A')
  // Edge Cases
  // expect(convertToTitle()).toEqual()
})
