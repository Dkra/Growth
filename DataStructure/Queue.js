/*
 * Queue use Array
 *           Accessing    Searching    Inserting    Deleting
 * -------------------------------------------------------------------------
 *           O(N)         O(N)         O(1)         O(N)
 * 																									because of using array
 */

class Queue {
  constructor() {
    this.list = []
    this.length = 0
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.length === 0
  }

  /**
   * Read the element at the front of the queue without removing it.
   * @return {*}
   */
  peek() {
    return this.list[0]
  }

  /**
   * Add a new element to the end of the queue (the tail of the linked list).
   * This element will be processed after all elements ahead of it.
   * @param {*} value
   */
  enqueue(value) {
    this.list.push(value)
    this.length++
  }

  /**
   * Remove the element at the front of the queue.
   * If the queue is empty, return null.
   * @return {*}
   */
  dequeue() {
    if (this.list.length === 0) return null

    this.length--
    return this.list.shift()
  }
}

export default Queue
