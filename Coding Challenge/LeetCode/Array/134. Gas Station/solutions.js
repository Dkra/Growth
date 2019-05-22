/* eslint-disable */
// https://leetcode.com/submissions/detail/230617520/

/**
 * Solutions A: If i from 0 to 2 the netGasSum < 0, possible start station become i=3
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

const canCompleteCircuit = (gas, cost) => {
  let netGasSum = 0,
    currGasSum = 0,
    start = 0

  for (let i = 0; i < gas.length; i++) {
    netGasSum += gas[i] - cost[i] // Keep tracking total NetGasSum
    currGasSum += gas[i] - cost[i] // Keep tracking from [start] index's sum

    // if currGasSum (current path) is failed,
    // set start to next pos: i+1 as new start station & reset the currGasSum =0
    if (currGasSum < 0) {
      start = i + 1
      currGasSum = 0
    }
  }

  // if total netGasSum < 0, there's no way to curcuit those stations
  if (netGasSum < 0) return -1
  return start
}
