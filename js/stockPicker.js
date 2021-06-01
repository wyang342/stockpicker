const picker = function (prices) {
  // Temp values to mark current position in array
  let currentBuyDate = 0;
  let currentSellDate = 1;

  // Values to return
  let buyDate = 0;
  let sellDate = 0;

  let maxProfit = 0;

  while (currentBuyDate != prices.length - 1) {  // loop thru prices until currentBuyDate is at last element
    for (currentSellDate = currentBuyDate + 1; currentSellDate < prices.length; currentSellDate++) {  // currentSellDate starts at currentBuyDate + 1 and loops to the end of prices
      if (prices[currentSellDate] - prices[currentBuyDate] > maxProfit) {  // determining maxProfit
        maxProfit = prices[currentSellDate] - prices[currentBuyDate]
        buyDate = currentBuyDate;
        sellDate = currentSellDate;
      }
    }

    currentBuyDate++;
    currentSellDate++;
  }

  return [buyDate, sellDate];
}


module.exports = picker;