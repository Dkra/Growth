/*
 * Stack
 *           Accessing    Searching    Inserting    Deleting
 * -------------------------------------------------------------------------
 *           O(N)         O(N)         O(1)         O(1)
 */

class Stack {
  constructor() {
    this.list = []
  }

  get length() {
    return this.list.length
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.list.length === 0
  }

  /**
   * @return {*}
   */
  peek() {
    return this.list[0]
  }

  /**
   * @param {*} value
   */
  push(value) {
    this.list.push(value)
  }

  /**
   * @return {*}
   */
  pop() {
    if (this.length === 0) return null
    return this.list.pop()
  }

  /**
   * @return {*[]}
   */
  toArray() {}
}

export default Stack
