/**
 *
 * Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element
 * between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.
 * @format
 */

function arrayManipulation(n, queries) {
	const arr = Array(n + 1);
	let maxValue = 0;
	let currentNumber = 0;

	queries.forEach(([startRange, endRange, value]) => {
		arr[startRange] = arr[startRange] || { start: 0, end: 0 };
		arr[endRange] = arr[endRange] || { start: 0, end: 0 };
		arr[startRange].start += value;
		arr[endRange].end += value;
	});

	arr.forEach((cell) => {
		if (cell) {
			currentNumber += cell.start;
			if (currentNumber > maxValue) {
				maxValue = currentNumber;
			}
			currentNumber -= cell.end;
		}
	});
	return maxValue;
}

console.log(
	arrayManipulation(10, [
		[1, 5, 3],
		[4, 8, 7],
		[6, 9, 1],
	])
);
