import solutions from './problem'

test('all solutions should be tested', () => {
  solutions.forEach(s => {
    expect(s([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6], 5)).toEqual(
      15
    )

    expect(s([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6], 2)).toEqual(
      3
    )

    // expect(s()).toEqual()

    // Edge Cases
    // expect(s().toEqual()
  })
})
