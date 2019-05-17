/**
 * https://leetcode.com/problems/find-the-celebrity/
 */

/**
 * Runtime: 76 ms, faster than 99.54% of JavaScript online submissions for Find the Celebrity.
 * Memory Usage: 37.3 MB, less than 80.70% of JavaScript online submissions for Find the Celebrity.
 */

const findCelebrity = graph => {
  const knows = (a, b) => graph[a][b]
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
    /*** Code From Here ***/
    let candidate = 0

    for (let j = 1; j < n; j++) {
      if (knows(candidate, j)) candidate = j
    }

    let isCelebrity = true
    let numKnowCandidate = 1 // I know myself
    for (let i = 0; i < n; i++) {
      if (candidate === i) continue // I know myself
      if (knows(i, candidate)) numKnowCandidate++
      if (knows(candidate, i)) {
        isCelebrity = false
        break
      }
    }

    return isCelebrity && numKnowCandidate === n ? candidate : -1
  }
}

module.exports = findCelebrity
