/* eslint-disable */
// https://leetcode.com/submissions/detail/229943982/

/**
 * Solutions A: Each time Rotate One Spot, k tims
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
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
  }

  return `${bulls}A${cows}B`
}
