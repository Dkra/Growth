/* eslint-disable */
// https://leetcode.com/submissions/detail/229943982/

/**
 * Solutions A: Having a size 10 array to keep tracking nums
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
      /*
       Situation: when someone guess this digit in the past
       e.g number[s] = -2, someone guessed this digit at least twice!
      */
      // when the current secret number[s] found is less than 0, which means
      // someone GUESS this digit before due to => numbers[g]--
      // and now the secret number[s] show's up, its a bull
      if (numbers[s] < 0) {
        cows++
      }

      /*
        Situation: when secret digit show's up in the past
        e.g number[g] = 2, digit has appears in number[s] at least twice!
      */
      // For current guess position which is number[g],
      // which meas there's has secret digit show's up before due to => numbers[s]++
      if (numbers[g] > 0) {
        cows++
      }

      numbers[s]++
      numbers[g]-- //
    }
  }

  return `${bulls}A${cows}B`
}
