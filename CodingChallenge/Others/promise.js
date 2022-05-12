/**
 * @param  {func}
 */

function MyPromise(executor) {
  const _self = this
  this.status = 'pending'
  this.value = null
  this.reason = null
  this.onFullfilledArr = []
  this.onRejectedArr = []

  function resolve(value) {
    // Mock async micro task
    // Caution: setTimeout is Macro task
    setTimeout(() => {
      if (_self.status === 'pending') {
        _self.value = value
        _self.status = 'fullfilled'

        _self.onFullfilledArr.forEach(func => func(value))
      }
    })
  }

  function reject(reason) {
    // Mock async micro task
    // Caution: setTimeout is Macro task
    setTimeout(() => {
      if (_self.status === 'pending') {
        _self.reason = reason
        _self.status = 'rejected'

        _self.onRejectedArr.forEach(func => func(reason))
      }
    })
  }

  executor(resolve, reject)
}

// 1. execute onFullfilled & onRejected
// 2. wrap executed return value in a new Promise
MyPromise.prototype.then = function(onFullfilled, onRejected) {
  // Set default Succes & Fail func
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : data => onFullfilled(data)
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : err => {
          throw err
        }

  let result
  // for [sync] case
  if (this.status === 'fullfilled') {
    return new Promise((res, rej) => {
      try {
        result = onFullfilled(this.value)
        res(result)
      } catch (error) {
        rej(error)
      }
    })
  }
  if (this.status === 'rejected') {
    return new Promise((res, rej) => {
      try {
        result = onRejected(this.reason)
        res(result)
      } catch (error) {
        rej(error)
      }
    })
  }

  // for [async] case
  if (this.status === 'pending') {
    this.onFullfilledArr.push(onFullfilled)
    this.onRejectedArr.push(onRejected)
  }
}

module.exports = MyPromise
