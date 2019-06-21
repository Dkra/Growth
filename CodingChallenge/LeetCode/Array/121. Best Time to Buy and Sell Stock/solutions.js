/* eslint-disable */
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/discuss/?currentPage=1&orderBy=most_votes&query=

/**
 * Solutions A: Use Math & Min more clear
 * Time complexity: O(N)
 * Space complexity: O(1)
 */

/**
 * Runtime: 56 ms, faster than 96.42% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 * Memory Usage: 35.5 MB, less than 52.99% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 */

const maxProfit = prices => {
  let currLowestBuy = prices[0]
  let currMaxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    currMaxProfit = Math.max(currMaxProfit, prices[i] - currLowestBuy)
    currLowestBuy = Math.min(currLowestBuy, prices[i])
  }
  return currMaxProfit
}
