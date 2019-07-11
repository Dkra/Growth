class BookSingleton {
  constructor(borrowerName) {
    if (borrowerName === undefined) throw new Error("Should provide borrowerName name")
    this.instance
    this.borrowerName = borrowerName
  }

  static borrowBookBy(borrowerName) {
    if (!this.instance) {
      this.instance = new BookSingleton(borrowerName)
    } else {
      this.borrowerName = borrowerName
    }

    return this.instance
  }
}

module.exports = BookSingleton
