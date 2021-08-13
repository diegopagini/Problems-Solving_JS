/**
 *
 * You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their
 * total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
 *
 * @format
 */

function birthdayCakeCandles(candles) {
	const tallestCandle = Math.max(...candles);
	const result = candles.filter((candle) => candle === tallestCandle);
	console.log(result.length);
}

birthdayCakeCandles([3, 2, 1, 3]);
