function findMaxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            maxProfit = Math.max(maxProfit, price-minPrice);
        }
    }
    return maxProfit;
}

console.log(findMaxProfit([7, 1, 5, 3, 6, 4]));
console.log(findMaxProfit([7,6,4,3,1]));