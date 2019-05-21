/**
 * https://leetcode.com/problems/bulls-and-cows/
 */

/**
 * Runtime: 76 ms, faster than 99.54% of JavaScript online submissions for Find the Celebrity.
 * Memory Usage: 37.3 MB, less than 80.70% of JavaScript online submissions for Find the Celebrity.
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = (secret, guess) => {
  if (secret.length == 0) {
    return "0A0B"
  }

  let bulls = 0
  let cows = 0
  let numbers = new Array(10).fill(0)

  for (let i = 0; i < secret.length; i++) {
    let s = parseInt(secret[i])
    let g = parseInt(guess[i])

    if (s == g) {
      bulls++
    } else {
      if (numbers[s] < 0) {
        cows++
      }

      if (numbers[g] > 0) {
        cows++
      }

      numbers[s]++
      numbers[g]--
    }
    console.log("i", i)
    console.log(numbers)
    console.log("-----------------------")
    continue
  }

  return `${bulls}A${cows}B`
}

module.exports = getHint
