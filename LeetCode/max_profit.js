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

const prices = [7,6,4,3,1];
const output = findMaxProfit(prices);
console.log(output);
