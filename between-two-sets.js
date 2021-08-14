/**
 *
 * There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
 *
 * The elements of the first array are all factors of the integer being considered
 * The integer being considered is a factor of all elements of the second array
 * These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
 *
 * @format
 */
function getTotalX(a, b) {
	let result = 0;
	let index = 1;
	let cloneA = a.splice(1, a.length); // clone new array of a but not a[0]
	while (a[0] * index <= b[0]) {
		if (
			cloneA.every((item) => (a[0] * index) % item === 0) &&
			b.every((item) => item % (a[0] * index) === 0)
		) {
			result++;
		}
		index++;
	}
	return result;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
