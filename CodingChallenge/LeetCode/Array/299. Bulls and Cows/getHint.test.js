const getHint = require("./getHint")

test("problem", () => {
  expect(getHint("11", "10")).toEqual("1A0B")
  expect(getHint("011", "110")).toEqual("1A2B")
  expect(getHint("1807", "7810")).toEqual("1A3B")
  expect(getHint("1123", "0111")).toEqual("1A1B")

  // Edge Cases
  expect(getHint("", "")).toEqual("0A0B") // All correct
  expect(getHint("1111", "1111")).toEqual("4A0B") // All correct
  expect(getHint("1234", "4321")).toEqual("0A4B") // All wrong position
})
