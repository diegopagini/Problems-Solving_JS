/**
 * There is a large pile of socks that must be paired by color.
 * Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
 *
 * @format
 */
function sockMerchant(n, ar) {
	const colors = {};
	let pairs = 0;
	for (let color of ar)
		if (colors[color]) {
			colors[color] = 0;
			pairs += 1;
		} else {
			colors[color] = 1;
			console.log(colors);
		}

	return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
