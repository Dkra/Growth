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
  const swapList = listNode.next
  // eslint-disable-next-line no-param-reassign
  listNode.next = swapNodeInPairs(listNode.next.next)
  swapList.next = listNode

  return swapList
}

module.exports = {
  ListNode,
  swapNodeInPairs
}
