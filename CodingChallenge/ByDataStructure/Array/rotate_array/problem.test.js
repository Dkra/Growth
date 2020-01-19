import solutions from './problem'

test('all solutions should be tested', () => {
  solutions.forEach(s => {
    expect(s([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3])

    // expect(s()).toEqual()

    // expect(s()).toEqual()

    // Edge Cases
    expect(s([], 2)).toEqual([])
  })
})
