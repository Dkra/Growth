/**
 * Approach: keep tracking for best_profit, best_sell
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
let find_buy_sell_stock_prices = function(arr) {
  let curr_profit
  let curr_buy = arr[0]
  let best_sell = arr[1]
  let best_profit = best_sell - curr_buy

  for (let i = 1; i < arr.length; i++) {
    curr_profit = arr[i] - curr_buy
    if (curr_profit > best_profit) {
      best_profit = curr_profit
      best_sell = arr[i]
    }

    if (arr[i] < curr_buy) curr_buy = arr[i]
  }

  return [best_sell - best_profit, best_sell] //Return a tuple with (high, low) price values
}

export default [find_buy_sell_stock_prices]
