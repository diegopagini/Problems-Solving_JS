/**
 * You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates.
 * You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.
 *
 * @format
 */
function minimumSwaps(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		// console.log(arr[i], i + 1);
		if (arr[i] != i + 1) {
			// console.log(arr[i], i + 1);
			let temp = arr[i];
			arr[arr.indexOf(i + 1)] = temp;
			// console.log(arr.indexOf(i + 1));
			arr[i] = i + 1;
			count = count + 1;
		}
	}
	return count;
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));
