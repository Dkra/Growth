import HashTable from '../HashTable'

let hashTable = new HashTable()

beforeEach(() => {
  hashTable = new HashTable()
})

test('hashKey', () => {
  const key1 = hashTable.hashKey('abc')
  const key2 = hashTable.hashKey('def')
  const sameKeyAskey1 = hashTable.hashKey('abc')

  expect(key1).toBe(sameKeyAskey1)
  expect(key1).not.toBe(key2)
})

test('hasKey', () => {
  const key1 = 'Key'

  expect(hashTable.hasKey(key1)).toBe(false)
  hashTable.set(key1, 'Just A Value.')
  expect(hashTable.hasKey(key1)).toBe(true)
})

test('set & get', () => {
  const key1 = '!!!'
  const key2 = '@@@'
  const value1 = '------------'

  hashTable.set(key1, value1)
  expect(hashTable.get(key1)).toBe(value1)
  expect(hashTable.get(key2)).not.toBe(value1)
})

test('remove', () => {
  const key1 = '!!!'
  const value1 = '------------'

  hashTable.set(key1, value1)
  hashTable.remove(key1)

  expect(hashTable.remove(key1)).toBe(undefined)
})
