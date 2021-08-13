/** @format */

function countInversions(arr) {
	return sortAndCount(arr);
}

function sortAndCount(arr) {
	if (arr.length < 2) {
		return 0;
	}

	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);

	return (
		sortAndCount(left) +
		sortAndCount(right) +
		mergeSortAndCount(arr, left, right)
	);
}

function mergeSortAndCount(arr, left, right) {
	let i = 0,
		leftIndex = 0,
		rightIndex = 0,
		inversions = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] <= right[rightIndex]) {
			arr[i] = left[leftIndex];
			leftIndex++;
		} else {
			arr[i] = right[rightIndex];
			rightIndex++;
			inversions += left.length - leftIndex;
		}

		i++;
	}

	while (leftIndex < left.length) {
		arr[i] = left[leftIndex];
		leftIndex++;
		i++;
	}

	while (rightIndex < right.length) {
		arr[i] = right[rightIndex];
		rightIndex++;
		i++;
	}

	return inversions;
}

console.log(countInversions([1, 1, 1, 2, 2]));
