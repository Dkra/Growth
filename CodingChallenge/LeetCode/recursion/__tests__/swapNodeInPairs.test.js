const { ListNode, swapNodeInPairs } = require("../swapNodeInPairs")

describe("should swap 2->1 to 1->2", () => {
  const listNode = new ListNode(2)
  listNode.add(1)

  test("verify 2->1 ListNode creation", () => {
    expect(listNode.val).toBe(2)
    expect(listNode.next.val).toBe(1)
  })

  test("2->1 to 1->2", () => {
    const swapList = swapNodeInPairs(listNode)
    expect(swapList.val).toBe(1)
    expect(swapList.next.val).toBe(2)
  })
})

describe("should swap 1->2->3->4 to 2->1->4->3", () => {
  const listNode = new ListNode(1)
  listNode.add(2)
  listNode.add(3)
  listNode.add(4)

  test("verify 1->2->3->4 ListNode creation", () => {
    expect(listNode.val).toBe(1)
    expect(listNode.next.val).toBe(2)
    expect(listNode.next.next.val).toBe(3)
    expect(listNode.next.next.next.val).toBe(4)
  })

  test.only("should swap 1->2->3->4 to 2->1->4->3", () => {
    const swapList = swapNodeInPairs(listNode)
    expect(swapList.val).toBe(2)
    expect(swapList.next.val).toBe(1)
    expect(swapList.next.next.val).toBe(4)
    expect(swapList.next.next.next.val).toBe(3)
  })
})
