import { reject } from 'lodash'

const myResolve = value => new Promise((res, rej) => res(value))

const myReject = value => new Promise((res, rej) => rej(value))

const myAll = value => {
  if (!Array.isArray(value)) throw new Error('Parameter should be array type')
  return new Promise((res, rej) => {
    const result = []
    for (let i = 0; i < value.length; i++) {
      value[i].then(data => {
        if (data instanceof Error) {
          rej(data.message)
        }

        result.push(data)
        if (value.length === result.length) res(result)
      }, reject)
    }
  })
}

const MyPromise = { myResolve, myReject, myAll }

export { myResolve, myReject, myAll }
export default MyPromise
