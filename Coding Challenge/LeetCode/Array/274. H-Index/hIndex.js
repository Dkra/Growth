/**
 * https://leetcode.com/problems/h-index/
 */

/** Reflect:
 * Sort first, find the n-th paper >= it's citations
 * citations >= n-th paper is H-idx
 * Runtime: 52 ms, faster than 99.21% of JavaScript online submissions for H-Index.
 * Memory Usage: 34.8 MB, less than 64.52% of JavaScript online submissions for H-Index.
 */

/**
 * Assume sort function use merge sort
 * Time complexity: O(NlogN)
 * Space complexity: O(N)
 */

/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = citations => {
  if (citations.length === 0) return 0
  const citationsSorted = citations.sort((a, b) => b - a)

  if (citationsSorted.length >= 1 && citationsSorted[0] === 0) return 0
  let hIdx = 0
  citationsSorted.forEach((val, idx) => {
    if (val >= idx + 1) hIdx = idx + 1
  })
  return hIdx
}

module.exports = hIndex
