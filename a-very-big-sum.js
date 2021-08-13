/**
 *
 * In this challenge, you are required to calculate and print the sum of the elements in an array,
 * keeping in mind that some of those integers may be quite large.
 *
 * @format
 */

function aVeryBigSum(ar) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	const result = ar.reduce(reducer);
	console.log(result);
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
