import { reject } from 'lodash'

const myResolve = value => new Promise((res, rej) => res(value))

const myReject = value => new Promise((res, rej) => rej(value))

const myAll = value => {
  if (!Array.isArray(value)) throw new Error('Parameter should be array type')
  let isRejected = false

  return new Promise((res, rej) => {
    const result = []
    for (let i = 0; i < value.length; i++) {
      value[i].then(data => {
        if (isRejected) return // return directly if already has failed promise rejected
        if (data instanceof Error) {
          rej(data.message)
          isRejected = true
          return
        }

        result.push(data)
        if (value.length === result.length) res(result)
      }, reject)
    }
  })
}

const myRace = value => {
  if (!Array.isArray(value)) throw new Error('Parameter should be array type')
  let isResolved = false
  return new Promise((res, rej) => {
    const result = []
    for (let i = 0; i < value.length; i++) {
      value[i].then(data => {
        if (isResolved) return // return directly if already has failed promise resolved
        if (data instanceof Error) {
          rej(data.message)
          return
        }
        isResolved = true
        res(data)
      }, reject)
    }
  })
}

const MyPromise = { myResolve, myReject, myAll, myRace }

export { myResolve, myReject, myAll, myRace }
export default MyPromise
