import MyPromise, { myResolve, myReject, myAll } from '../promiseStaticF'

describe('myResolve()', () => {
  test('Primitive value as parameter', async () => {
    const myValue = await myResolve(3).then(data => data)
    const nativeValue = await Promise.resolve(3).then(data => data)
    expect(myValue).toEqual(nativeValue)
  })

  test('Promise value as parameter', async () => {
    const promiseObj = Promise.resolve('haha')
    const myValue = await myResolve(promiseObj)
    const nativeValue = await Promise.resolve(promiseObj)

    expect(myValue).toEqual(nativeValue)
  })
})

describe('myReject()', () => {
  test('pass error', async () => {
    const error = new Error('failed!')

    const myValue = await myReject(error).then(null, err => err)
    const nativeValue = await Promise.resolve(error).then(null, err => err)
    expect(myValue).toEqual(nativeValue)
  })
})

describe('myAll()', () => {
  test('params should be array type', () => {
    jest.spyOn(MyPromise, 'myAll')
    MyPromise.myAll([])
    expect(MyPromise.myAll.mock.calls[0][0]).toBeInstanceOf(Array)

    MyPromise.myAll.mockRestore()
    expect(() => MyPromise.myAll('')).toThrow()
    expect(() => MyPromise.myAll(true)).toThrow()
    expect(() => MyPromise.myAll({})).toThrow()
    expect(() => MyPromise.myAll(1)).toThrow()
  })

  test('all success', async () => {
    // Pass two promise, all success with two resolved data in an returned array
    const promiseA = new Promise((res, rej) => setTimeout(() => res('A')), 1000)
    const promiseB = new Promise((res, rej) => setTimeout(() => res('B')))

    const result = await MyPromise.myAll([promiseA, promiseB]).then(data => data, null)

    expect(result[0]).toEqual('A')
    expect(result[1]).toEqual('B')
  })

  test('only return first failed with reason', async () => {
    const promiseB = new Promise((res, rej) => rej(new Error('B failed!!!'))).catch(err => err)
    // Should not return second failed
    const promiseA = new Promise((res, rej) => rej(new Error('A failed!!!'))).catch(err => err)

    await expect(MyPromise.myAll([promiseA, promiseB])).rejects.toMatch('B failed!!!')
  })
})

describe('myCatch()', () => {})

describe('myRace()', () => {})
