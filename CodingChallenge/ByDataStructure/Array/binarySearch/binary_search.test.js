import solutions from './binary_search'
test('problem', () => {
  const sortedArr = [
    10,
    20,
    47,
    59,
    63,
    75,
    88,
    99,
    107,
    120,
    133,
    155,
    162,
    176,
    188,
    199,
    200,
    210,
    222
  ]

  solutions.forEach(s => {
    expect(s(sortedArr, 47)).toEqual(2)

    expect(s(sortedArr, 75)).toEqual(5)

    expect(s(sortedArr, 175)).toEqual(-1)

    // Edge Cases
    expect(s([])).toEqual(-1)
  })
})
