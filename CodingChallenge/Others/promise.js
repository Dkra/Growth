/**
 * @param  {func}
 */

function MyPromise(executor) {
  const _self = this
  this.status = 'pending'
  this.value = null
  this.reason = null
  this.onFullfilled = Function.prototype
  this.onRejected = Function.prototype

  function resolve(value) {
    // Mock async micro task
    // Caution: setTimeout is Macro task
    setTimeout(() => {
      if (_self.status === 'pending') {
        _self.value = value
        _self.status = 'fullfilled'

        _self.onFullfilled(value)
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

        _self.onRejected(reason)
      }
    })
  }

  executor(resolve, reject)
}

MyPromise.prototype.then = function(onFullfilled, onRejected) {
  // Set default Succes & Fail func
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : data => onFullfilled(data)
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : err => {
          throw err
        }
  // for [sync] case
  if (this.status === 'fullfilled') {
    onFullfilled(this.value)
  }
  if (this.status === 'rejected') {
    onRejected(this.reason)
  }

  // for [async] case
  if (this.status === 'pending') {
    this.onFullfilled = onFullfilled
    this.onRejected = onRejected
  }
}

module.exports = MyPromise
