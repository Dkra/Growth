import solutions from './problem'

test('all solutions should be tested', () => {
  solutions.forEach(s => {
    expect(s([1, 10, -1, 11, 5, 0, -7, 0, 25, -35])).toEqual([0, 0, 1, 10, -1, 11, 5, -7, 25, -35])

    expect(s([1, 2, 3, 0, 0])).toEqual([0, 0, 1, 2, 3])

    // Edge Cases
    // expect(s().toEqual()
  })
})
