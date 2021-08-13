/**
 *
 * Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some.
 * There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend,
 * and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend,
 * determine the maximum number of gifts he can buy.
 *
 * Note Each toy can be purchased only once.
 *
 *
 * @format
 */

function maximumToys(prices, k) {
	let sortedPrices = prices.sort((a, b) => a - b);
	let counter = 0;

	sortedPrices.forEach((price) => {
		if (k > price) {
			k = k - price;
			counter++;
		}
	});

	return counter;
}

maximumToys([1, 12, 5, 111, 200, 1000, 10], 50);
