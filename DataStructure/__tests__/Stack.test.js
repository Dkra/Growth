import Stack from '../Stack'

let stack = new Stack()

beforeEach(() => {
  stack = new Stack()
})

test('stack.length & push fuction', () => {
  expect(stack.length).toBe(0)
  stack.push(1)
  expect(stack.length).toBe(1)
})

test('IsEmpty', () => {
  expect(stack.isEmpty()).toBe(true)
})

test('peek', () => {
  stack.push(1)
  stack.push(2)
  expect(stack.peek()).toBe(1)
})

test('pop', () => {
  expect(stack.pop()).toBe(null)
  stack.push(1)
  stack.push(2)
  expect(stack.pop()).toBe(2)
})
