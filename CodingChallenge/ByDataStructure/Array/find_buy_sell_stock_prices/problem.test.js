import solutions from './problem'

test('all solutions should be tested', () => {
  solutions.forEach(s => {
    expect(s([1, 2, 3, 4, 3, 2, 1, 2, 5])).toEqual([1, 5])

    // expect(s()).toEqual()

    // expect(s()).toEqual()

    // Edge Cases
    expect(s([8, 6, 5, 4, 3, 2, 1])).toEqual([6, 5])
  })
})
