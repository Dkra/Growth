const Queue = require('../Queue')

let queue = new Queue()

beforeEach(() => {
	queue = new Queue()
})

test('isEmpty', () => {
	expect(queue.isEmpty()).toBe(true)
	queue.enqueue('a')
	expect(queue.isEmpty()).toBe(false)
})

test('enqueue, peek, dequeue', () => {
	const value1 = 'a'
	const value2 = 'b'

	queue.enqueue(value1)
	queue.enqueue(value2)

	expect(queue.length).toBe(2)
	expect(queue.peek()).toBe(value1)
	expect(queue.dequeue()).toBe(value1)
	expect(queue.peek()).toBe(value2)
	expect(queue.dequeue()).toBe(value2)
})
