import addBinary from './addBinary'

test('problem', () => {
  expect(addBinary('11', '1')).toEqual('100')
  expect(addBinary('1010', '1011')).toEqual('10101')

  // Edge Cases
  expect(addBinary('0', '0')).toEqual('0') // shouldn't be 00
})
