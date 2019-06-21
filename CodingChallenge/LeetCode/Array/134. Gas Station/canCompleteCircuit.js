/**
 * https://leetcode.com/problems/gas-station/
 */

/**
 * Reflection: Both Time & Memory could be impoved
 * Runtime: 124 ms, faster than 27.14% of JavaScript online submissions for Gas Station.
 * Memory Usage: 35.1 MB, less than 17.77% of JavaScript online submissions for Gas Station.
 */

const canCompleteCircuit = (gas, cost) => {
  const changePerStation = new Array(gas.length).fill(0)
  let idx = -1

  for (let i = 0; i < gas.length; i++) {
    changePerStation[i] = gas[i] - cost[i]
  }

  for (let i = 0; i < gas.length; i++) {
    let accumalator = 0
    let stations = 0
    for (let j = i; stations < gas.length; j++) {
      const pos = j % gas.length
      stations++
      accumalator += changePerStation[pos]
      if (accumalator < 0) {
        break
      }
    }
    if (stations === gas.length && accumalator >= 0) {
      idx = i
      break
    }
  }

  return idx
}

module.exports = canCompleteCircuit
