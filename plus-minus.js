/**
 *
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
 * Print the decimal value of each fraction on a new line with 6 places after the decimal.
 *
 * @format
 */

function plusMinus(arr) {
	const positive = arr.filter((number) => number > 0).length / arr.length;
	const negative = arr.filter((number) => number < 0).length / arr.length;
	const zeronums = arr.filter((number) => number === 0).length / arr.length;

	return console.log(
		positive.toFixed(6) +
			'\n' +
			negative.toFixed(6) +
			'\n' +
			zeronums.toFixed(6)
	);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
