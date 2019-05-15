const { ListNode, swapNodeInPairs } = require("../swapNodeInPairs")

describe("2->1 to 1->2", () => {
  const listNode = new ListNode(2)
  listNode.add(1)

  test("verify 2->1 ListNode creation", () => {
    expect(listNode.val).toBe(2)
    expect(listNode.next.val).toBe(1)
  })

  test("should swap 2->1 to 1->2", () => {
    const swapList = swapNodeInPairs(listNode)
    expect(swapList.val).toBe(1)
    expect(swapList.next.val).toBe(2)
  })
})
