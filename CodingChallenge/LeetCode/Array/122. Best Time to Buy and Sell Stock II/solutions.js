/* eslint-disable */
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/?currentPage=1&orderBy=most_votes&query=

/**
 * Solutions A: Use Math & Min more clear
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * Relfection: Peak Valley Approach
 * Sum of every peak-valley profit in the array
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = prices => {
  let maxProfit = 0
  let valley = 0
  let peak = 0
  let i = 0
  while (i < prices.length - 1) {
    // find valley
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++
    }
    valley = prices[i]

    // find peak
    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++
    }
    peak = prices[i]
    maxProfit += peak - valley
  }
  return maxProfit
}
