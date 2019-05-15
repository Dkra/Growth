class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }

  add(val) {
    let currentHead = this
    while (currentHead.next !== null) {
      currentHead = currentHead.next
    }
    currentHead.next = new ListNode(val)
  }
}

const swapNodeInPairs = listNode => {
  if (listNode === null) return null
  if (listNode.next === null) return listNode

  // swap
  const newHead = listNode.next
  // eslint-disable-next-line no-param-reassign
  listNode.next = swapNodeInPairs(listNode.next.next)
  newHead.next = listNode

  return newHead
}

module.exports = {
  ListNode,
  swapNodeInPairs
}
