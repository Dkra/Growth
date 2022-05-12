const MyPromise = require('../promise')

let myPromise, fn
beforeEach(() => {
  fn = jest.fn()
  myPromise = new MyPromise(fn)
})

test('check properties', () => {
  expect(myPromise).toHaveProperty('status', 'pending')
  expect(myPromise).toHaveProperty('value', null)
  expect(myPromise).toHaveProperty('reason', null)
})

test('then()', () => {
  expect(myPromise.then).toBeInstanceOf(Function)
  expect(fn.mock.calls[0][0]).toBeInstanceOf(Function) // resolve fn
  expect(fn.mock.calls[0][1]).toBeInstanceOf(Function) // rej fn
})

test('then() - resolve', () => {
  myPromise = new MyPromise((res, rej) => res('case - resolve'))
  myPromise.then(data => {
    expect(data).toBe('case - resolve')
  })
})

test('then() - reject', () => {
  myPromise = new MyPromise((res, rej) => rej('case - reject'))
  myPromise.then(
    () => {},
    err => {
      expect(err).toBe('case - reject')
    }
  )
})

test('should only resolve() been called', done => {
  myPromise = new MyPromise((res, rej) => {
    res('case - resolve') // happen in advance
    rej('case - reject')
  })

  const mockRes = jest.fn()
  const mockRej = jest.fn()
  myPromise.then(
    data => {
      mockRes(data)
      expect(mockRes).toHaveBeenCalled() // should called
      done()
    },
    err => {
      mockRej(err)
      expect(mockRej).not.toHaveBeenCalled()
      done()
    }
  )
})

test('should only reject() been called', done => {
  myPromise = new MyPromise((res, rej) => {
    rej('case - reject') // happen in advance
    res('case - resolve')
  })

  const mockRes = jest.fn()
  const mockRej = jest.fn()

  myPromise.then(
    data => {
      mockRes(data)
      expect(mockRes).not.toHaveBeenCalled()
      done()
    },
    err => {
      mockRej(err)
      expect(mockRej).toHaveBeenCalled() // should called
      done()
    }
  )
})

test('support [async] resolve()', done => {
  myPromise = new MyPromise((res, rej) => {
    setTimeout(() => {
      res('async resolve')
    }, 1000)
  })

  myPromise.then(data => {
    expect(data).toBe('async resolve')
    done()
  })
})

test('sequence should be call A then B', done => {
  fn = jest.fn()
  myPromise = new MyPromise((res, rej) => res('B'))

  myPromise.then(data => {
    fn(data) // execute this later (micro task async code)
    expect(fn.mock.calls[0][0]).toBe('A')
    expect(fn.mock.calls[1][0]).toBe('B')
    expect(fn.mock.calls.length).toBe(2)
    done()
  })

  fn('A') // execute this first (sync code)
})

test('then funciton should be chainable', async () => {
  await new Promise((res, rej) => {
    res('A') // Sync code
  })
    .then(data => {
      expect(data).toBe('A')
      return 'B' // return value as [non-promise type]
    })
    .then(data => {
      expect(data).toBe('B')
    })

  await new Promise((res, rej) => {
    res('A') // Sync code
  })
    .then(data => {
      expect(data).toBe('A')
      return new Promise((res, rej) => {
        // return value as [promise type]
        setTimeout(() => {
          res('Promise B')
        }, 1000)
      })
    })
    .then(data => {
      expect(data).toBe('Promise B')
    })

  await new Promise((res, rej) => {
    setTimeout(() => {
      res('A') // Async code
    }, 1000)
  })
    .then(data => {
      expect(data).toBe('A')
      return 'B' // return value as [non-promise type]
    })
    .then(data => {
      expect(data).toBe('B')
    })
})
