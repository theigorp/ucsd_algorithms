/*
  *Medium

  LOGIC:
  Loop over prices and check if the price for the next day is bigger than current price. If yes, increment profit.
  We can use this approach as they said we could by and sell stock in the same day.

  OPTIMIZATION:
  The runtime is O(n).
*/
function bestTimeToBuyAndSellStock(prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] - prices[i] > 0) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
}
