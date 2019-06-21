/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * Runtime: 64 ms, faster than 85.76% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 * Memory Usage: 35.3 MB, less than 86.61% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 */

/**
 * Relfection: Every iteration do two things:
 * 1. keep tracking lowest buy
 * 2. keep tracking maxProfit
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
  let currLowestBuy = prices[0]
  let currMaxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    if (currMaxProfit < prices[i] - currLowestBuy) currMaxProfit = prices[i] - currLowestBuy
    if (currLowestBuy > prices[i]) currLowestBuy = prices[i]
  }
  return currMaxProfit
}

module.exports = maxProfit
