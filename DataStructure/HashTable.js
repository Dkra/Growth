class HashTable {
	constructor() {
		this.memory = []
		this.keys = {}
	}

	/**
	 * Borrow A hashKey function from other
	 * @param {*} key
	 * @return {boolean}
	 */
	hashKey(key) {
		let hash = 0
		for (let index = 0; index < key.length; index++) {
			let code = key.charCodeAt(index)
			hash = ((hash << 5) - hash + code) | 0
		}
		this.keys[key] = key
		return key
	}

	/**
	 * @param {*} key
	 * @param {*} value
	 * @return {boolean}
	 */
	set(key, value) {
		const addr = this.hashKey(key)
		this.memory[addr] = value
	}

	/**
	 * @param {*} key
	 * @return {*}
	 */
	get(key) {
		const addr = this.hashKey(key)
		return this.memory[addr]
	}

	/**
	 * @param {*} key
	 */
	remove(key) {
		const addr = this.hashKey(key)
		delete this.memory[addr]
		delete this.keys[key]
	}

	/**
	 * @param {*} key
	 * @return {boolean}
	 */
	hasKey(key) {
		return Object.hasOwnProperty.call(this.keys, key)
	}
}

module.exports = HashTable
