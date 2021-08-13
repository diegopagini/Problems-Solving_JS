/**
 *
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 *
 * @format
 */

function diagonalDifference(arr) {
	let leftToRightDiagonal = [];
	let rightToLeftDiagonal = [];
	let count = arr.length - 1;
	const reducer = (accumulator, currentvalue) => accumulator + currentvalue;

	for (let i = 0; i < arr.length; i++) {
		leftToRightDiagonal.push(arr[i][i]);
		rightToLeftDiagonal.push(arr[i][count]);
		count--;
	}

	const sumOfLeftToRightDiagonal = leftToRightDiagonal.reduce(reducer);

	const sumOfRightToLeftDiagonal = rightToLeftDiagonal.reduce(reducer);

	const result = Math.abs(sumOfLeftToRightDiagonal - sumOfRightToLeftDiagonal);

	console.log(result);
	return result;
}

diagonalDifference([
	[11, 2, 4],
	[4, 5, 6],
	[10, 8, -12],
]);
