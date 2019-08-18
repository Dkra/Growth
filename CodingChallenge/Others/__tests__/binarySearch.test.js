const {
  genArrOneToTen,
  omitRandomNumber,
  omitedOneNumberFromArr,
  findOmitedNum
} = require("../binarySearch")

describe("Binary Search Test Example", () => {
  it("should return a 1 to 10 array", () => {
    const oneToTenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(genArrOneToTen()).toEqual(oneToTenArr)
  })

  it("should return arr.length to be 9", () => {
    expect(omitedOneNumberFromArr().length).toBe(9)
  })

  it("should omit a random number in array and its a number", () => {
    const oneToTenArr = genArrOneToTen()
    expect(typeof omitRandomNumber(oneToTenArr)).toBe("number")
  })

  it("should find the omited random number by Binary Search Algo", () => {
    const runCriteriaOnce = () => {
      const testedArr = genArrOneToTen()
      const omitedNum = omitRandomNumber(testedArr)
      expect(findOmitedNum(testedArr)).toEqual(omitedNum)
    }

    // Run N Times (because of random value)
    const times = 30
    for (i = 0; i < times; i++) runCriteriaOnce()
  })
})
