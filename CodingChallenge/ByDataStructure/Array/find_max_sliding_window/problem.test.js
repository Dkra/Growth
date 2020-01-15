import solutions from './problem'

test('all solutions should be tested', () => {
  solutions.forEach(s => {
    expect(s([1, 2, 3, 4, 3, 2, 1, 2, 5], 4)).toEqual([4, 4, 4, 4, 3, 5])

    expect(s([1, 2, 3, 4, 3, 2, 1, 2, 5], 3)).toEqual([3, 4, 4, 4, 3, 2, 5])

    expect(s([1, 2, 3, 4, 3, 2, 1, 2, 5], 5)).toEqual([4, 4, 4, 4, 5])

    // Edge Cases
    // expect(s().toEqual()
  })
})
