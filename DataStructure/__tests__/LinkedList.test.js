import LinkedList from '../LinkedList'

test('Prepend', () => {
  const linkedList = new LinkedList()
  linkedList.prepend('aaa')
  expect(linkedList.head.data).toBe('aaa')

  linkedList.prepend('bbb')
  expect(linkedList.head.data).toBe('bbb')
})

test('Append', () => {
  const linkedList = new LinkedList()
  linkedList.append('aaa')
  expect(linkedList.head.data).toBe('aaa')

  linkedList.append('bbb')
  expect(linkedList.head.data).toBe('aaa')
  expect(linkedList.head.next.data).toBe('bbb')
})

test('ToArray', () => {
  const linkedList = new LinkedList()
  expect(linkedList.toArray().length).toBe(0)

  linkedList.append('a')
  linkedList.append('b')
  linkedList.append('c')

  const dataArr = linkedList.toArray()
  expect(dataArr[0]).toBe('a')
  expect(dataArr[1]).toBe('b')
  expect(dataArr[2]).toBe('c')
})

test('DeleteHead', () => {
  const linkedList = new LinkedList()
  linkedList.deleteHead()
  expect(linkedList.head).toBe(null)

  linkedList.append('a')
  linkedList.append('b')
  linkedList.append('c')

  linkedList.deleteHead()
  expect(linkedList.head.data).toBe('b')
  linkedList.deleteHead()
  expect(linkedList.head.data).toBe('c')
  linkedList.deleteHead()
  expect(linkedList.head).toBe(null)
})

test('delete', () => {
  const linkedList = new LinkedList()

  linkedList.append('a')
  linkedList.append('a')
  linkedList.append('b')

  linkedList.delete('a')

  expect(linkedList.head.data).toBe('b')
})

test('Reverse', () => {
  const linkedList = new LinkedList()

  linkedList.append('a')
  linkedList.append('b')
  linkedList.append('c')
  linkedList.reverse()

  let arr = linkedList.toArray()
  expect(arr[0]).toBe('c')
  expect(arr[1]).toBe('b')
  expect(arr[2]).toBe('a')
})
