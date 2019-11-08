import {
  genArrOneToTen,
  omitRandomNumber,
  omitedOneNumberFromArr,
  findOmitedNum
} from "../binarySearch"

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
    // * P( (9/10)^50 * 10number ) not tested on a certain num
    // Approximate: 5%
    const times = 50
    for (let i = 0; i < times; i++) runCriteriaOnce()

    // Edge Cases will be missing first or last element
  })
})
