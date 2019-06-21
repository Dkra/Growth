/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * Runtime: 56 ms, faster than 94.33% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
 * Memory Usage: 35.4 MB, less than 66.85% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
 */

/**
 * Approach: Sum all profit small interval
 * Sum when prices[ i ]  > prices[ i - 1 ]
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = prices => {
  let maxProfit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1]
    }
  }
  return maxProfit
}

module.exports = maxProfit
