/*
 * Queue use Array
 *           Accessing    Searching    Inserting    Deleting
 * -------------------------------------------------------------------------
 *           O(N)         O(N)         O(1)         O(N)
 * 																									because of using array
 */

class QueueCircular {
  constructor(size) {
    this.list = []
    this.size = size
  }

  /**
   * @return {boolean}
   */
  isFull() {
    return this.list.length === this.size
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.list.length === 0
  }

  /**
   * Get the front item from the queue.
   * @return {number}
   */
  Front() {
    if (this.isEmpty()) return -1
    return this.list[0]
  }

  /**
   * Get the last item from the queue.
   * @return {number}
   */
  Rear() {
    if (this.isEmpty()) return -1
    return this.list[this.list.length - 1]
  }

  /**
   * Add a new element to the end of the queue (the tail of the linked list).
   * This element will be processed after all elements ahead of it.
   * @param {*} value
   */
  enQueue(value) {
    if (this.isFull()) return false
    this.list.push(value)
    return true
  }

  /**
   * Remove the element at the front of the queue.
   * If the queue is empty, return null.
   * @return {*}
   */
  deQueue() {
    if (this.isEmpty()) return false
    this.list.shift()
    return true
  }
}

module.exports = QueueCircular
