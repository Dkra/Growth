/**
 * https://leetcode.com/problems/insert-interval/
 */

/**
 * Runtime: 60 ms, faster than 94.00% of JavaScript online submissions for Insert Interval.
 * Memory Usage: 37.1 MB, less than 77.60% of JavaScript online submissions for Insert Interval.
 */

/**
 * Approach: LeftBoundary, RightBoundary
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const low = newInterval[0]
  const high = newInterval[1]
  if (intervals.length === 0) return [newInterval]
  if (low < intervals[0][0] && high < intervals[0][0]) {
    intervals.unshift([low, high])
    return intervals
  }

  if (low > intervals[intervals.length - 1][1]) {
    intervals.push([low, high])
    return intervals
  }

  let leftB, rightB
  let result = []
  for (let i = 0; i < intervals.length; i++) {
    if ((rightB !== undefined && leftB !== undefined) || low > intervals[i][1]) {
      result.push(intervals[i])
    }

    if (leftB === undefined) {
      if (low < intervals[i][0]) leftB = low
      else if (low >= intervals[i][0] && low <= intervals[i][1]) leftB = intervals[i][0]
      else if (low > intervals[i][1] && i + 1 < intervals.length && low < intervals[i + 1][0]) {
        leftB = low
        if (high < intervals[i + 1][0]) {
          rightB = high
          result.push([leftB, rightB])
          continue
        }
      }
    }

    if (rightB === undefined) {
      if (high <= intervals[i][1]) rightB = intervals[i][1]
      else if (high > intervals[i][1] && i + 1 < intervals.length && high < intervals[i + 1][0])
        rightB = high
      else if (i + 1 === intervals.length && high > intervals[i][1]) result.push([leftB, high])
      if (rightB !== undefined) result.push([leftB, rightB])
    }
  }

  return result
}
module.exports = insert
