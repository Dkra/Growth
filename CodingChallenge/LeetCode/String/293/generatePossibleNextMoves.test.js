import generatePossibleNextMoves from './generatePossibleNextMoves'

test('problem', () => {
  expect(generatePossibleNextMoves('++++')).toEqual(['--++', '+--+', '++--'])

  // Edge Cases
  // expect(generatePossibleNextMoves("")).toEqual([])
  // expect(generatePossibleNextMoves("+")).toEqual([])
  // expect(generatePossibleNextMoves("+-")).toEqual([])
})
