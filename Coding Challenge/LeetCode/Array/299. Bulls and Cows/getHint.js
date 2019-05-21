/**
 * https://leetcode.com/problems/bulls-and-cows/
 */

/**
 * Reflect: Every char set cost space used, should be impoved.
 * Runtime: 64 ms, faster than 94.51% of JavaScript online submissions for Bulls and Cows.
 * Memory Usage: 37.9 MB, less than 14.46% of JavaScript online submissions for Bulls and Cows.
 */

/**
 * Time complexity: O(N)
 * Space complexity: O(N)
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = (secret, guess) => {
  let numA = 0,
    numB = 0
  for (let i = 0; i < secret.length; i++) {
    if (guess[i] === secret[i]) {
      secret = setCharAt(secret, "A", i)
      numA++
    }
  }

  for (let i = 0; i < secret.length; i++) {
    const bIdx = secret.indexOf(guess[i])
    if (secret[i] !== "A" && bIdx !== -1) {
      secret = setCharAt(secret, "B", bIdx)
      numB++
    }
  }

  function setCharAt(str, char, idx) {
    return `${str.substring(0, idx)}${char}${str.substring(idx + 1)}`
  }
  return `${numA}A${numB}B`
}

module.exports = getHint
