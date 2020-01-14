import solutions from './problem'

test('all solutions should be tested', () => {
  solutions.forEach(s => {
    expect(
      s([1, 4, 6, 7, 8, 10, 14], [-1, 4, 5, 6, 7, 8, 50], [0, 6, 7, 8, 10, 25, 30, 40])
    ).toEqual(6)

    expect(s([-3, -1, 1, 5, 7, 16], [-1, 0, 4, 5, 7, 16, 50], [-8, -6, 7, 10, 16, 25])).toEqual(7)

    // expect(s()).toEqual()

    // Edge Cases
    expect(s([], [1], [])).toEqual(-1) // no common number
  })
})
