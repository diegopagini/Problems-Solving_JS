/**
 *
 * https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 *
 * @format
 */
function countSwaps(arr) {
	let numSwaps = 0;

	for (let j = 0; j < arr.length; j++) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;

				numSwaps++;
			}
		}
	}

	console.log(`Array is sorted in ${numSwaps} swaps.`);
	console.log(`First Element: ${arr[0]}`);
	console.log(`Last Element: ${arr[arr.length - 1]}`);
}

countSwaps([6, 4, 1]);
