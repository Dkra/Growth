import solutions from './problem'

test('all solutions should be tested', () => {
  solutions.forEach(s => {
    expect(s([1, 3, 4, 5, 7, 14, 15], 3)).toEqual(false)

    expect(s([1, 3, 4, 5, 7, 14, 15], 20)).toEqual(true)

    // expect(s()).toEqual()

    // Edge Cases
    // expect(s().toEqual()
  })
})
