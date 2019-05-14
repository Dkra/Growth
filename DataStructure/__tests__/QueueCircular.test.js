const QueueCircular = require("../QueueCircular")

const queueCircular = new QueueCircular(3)

describe("helloe", () => {
  test("queue operations", () => {
    expect(queueCircular.deQueue()).toEqual(false)
    expect(queueCircular.Rear()).toEqual(-1)
    expect(queueCircular.Front()).toEqual(-1)
    expect(queueCircular.enQueue(1)).toEqual(true)
    expect(queueCircular.enQueue(2)).toEqual(true)
    expect(queueCircular.enQueue(3)).toEqual(true)
    expect(queueCircular.enQueue(4)).toEqual(false)
    expect(queueCircular.Front()).toEqual(1)
    expect(queueCircular.Rear()).toEqual(3)
    expect(queueCircular.isFull()).toEqual(true)
    expect(queueCircular.deQueue()).toEqual(true)
    expect(queueCircular.enQueue(4)).toEqual(true)
    expect(queueCircular.Rear()).toEqual(4)
  })
})
