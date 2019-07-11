const BookSingleton = require("../Singleton")

describe("Test BookSingleton Class", () => {
  test("should pass name when use static borrowBookBy method", () => {
    const borrowBookWithoutPassingName = () => BookSingleton.borrowBookBy()
    expect(borrowBookWithoutPassingName).toThrowError("Should provide borrowerName name")
  })

  test("call twice borrowBookBy should return same book instance", () => {
    let borrower1 = BookSingleton.borrowBookBy("Roger")
    let borrower2 = BookSingleton.borrowBookBy("Scott")

    expect(borrower1).toBe(borrower2)
  })
})
