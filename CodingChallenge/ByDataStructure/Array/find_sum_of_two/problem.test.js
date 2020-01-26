import solutions from './problem'

test('all solutions should be tested', () => {
  solutions.forEach(s => {
    expect(s([2, 1, 8, 4, 7, 3], 3)).toEqual(true)

    expect(s([2, 1, 8, 4, 7, 3], 7)).toEqual(true)

    expect(s([2, 1, 8, 4, 7, 3], 20)).toEqual(false)

    // Edge Cases
    expect(s([1, 1], 0)).toEqual(false)
    expect(s([1, 1], 2)).toEqual(true)
  })
})
