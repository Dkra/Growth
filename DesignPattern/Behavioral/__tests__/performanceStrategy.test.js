const raiseSalaryStrategy = require("../Strategy")

describe("Test Raise salary base on performance", () => {
  const base = 1000

  test("Performace A: Should raise 10% from current salary ", () => {
    expect(raiseSalaryStrategy["A"](base)).toBe(base * 1.1)
  })

  test("Performace B: Should raise 5% from current salary ", () => {
    expect(raiseSalaryStrategy["B"](base)).toBe(base * 1.05)
  })

  test("Performace C: Should raise 3% from current salary ", () => {
    expect(raiseSalaryStrategy["C"](base)).toBe(base * 1.03)
  })
})
