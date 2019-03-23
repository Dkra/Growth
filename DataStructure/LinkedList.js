/*
 * LinkedList
 *           Accessing    Searching    Inserting    Deleting
 * -------------------------------------------------------------------------
 *           O(N)         O(N)         O(1)         O(1)
 */

class LinkedListNode {
	constructor(value) {
		this.data = value || null
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
	}

	/**
	 * @param {*} value
	 * @return {LinkedList}
	 */
	prepend(value) {
		this.length++
		if (this.head === null) {
			this.head = new LinkedListNode(value)
		} else {
			const newHead = new LinkedListNode(value)
			newHead.next = this.head
			this.head = newHead
		}

		return this.head
	}

	/**
	 * @param {*} value
	 * @return {LinkedList}
	 */
	append(value) {
		this.length++
		if (this.head === null) {
			this.head = new LinkedListNode(value)
		} else {
			// traverse to the end node & assign next node
			let currNode = this.head
			while (currNode.next) {
				currNode = currNode.next
			}
			currNode.next = new LinkedListNode(value)
		}

		return this.head
	}

	/**
	 * @return {LinkedListNode}
	 */
	deleteHead() {
		// Zero node
		if (this.head === null) return null

		// One node
		if (this.head.next === null) {
			this.head = null
		} else {
			// More than one node
			this.head = this.head.next
		}
		return this.head
	}

	/**
	 * @param {*} value
	 * @return {LinkedListNode}
	 */
	delete(value) {
		if (this.head === null) return null

		const firstMockValue = '---FirstMockValue---'
		this.prepend(firstMockValue)

		let prevNode = this.head
		let currNode = this.head.next
		while (currNode.next !== null || currNode.data === value) {
			if (currNode.data === value) {
				prevNode.next = prevNode.next.next
			}
			currNode = prevNode.next
		}

		this.deleteHead()

		return this.head
	}

	/**
	 * Reverse a linked list.
	 * @returns {LinkedList}
	 */
	reverse() {}

	/**
	 * @param {*[]} values - Array of values that need to be converted to linked list.
	 * @return {LinkedList}
	 */
	fromArray(values) {}

	/**
	 * @return {LinkedListNode[]}
	 */
	toArray() {
		if (this.head === null) return []

		const arr = []
		let currNode = this.head
		while (currNode) {
			arr.push(currNode.data)
			currNode = currNode.next
		}

		return arr
	}

	/**
	 * @return {LinkedListNode[]}
	 */
	reverse() {
		if (this.head === null) return null

		let nodePath = []
		let currNode = this.head
		while (currNode.next !== null) {
			nodePath.push(currNode)
			currNode = currNode.next
		}
		this.head = currNode

		// Reverse
		while (nodePath.length !== 0) {
			const popedNode = nodePath.pop()
			popedNode.next = null
			currNode.next = popedNode
			currNode = currNode.next
		}

		return this.head
	}
}

module.exports = LinkedList
