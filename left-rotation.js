/**
 *
 * A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example,
 * if  left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2]. Note that the lowest index
 * item moves to the highest index in a rotation. This is called a circular array.
 * Given an array a of n integers and a number, d, perform d left rotations on the array.
 * Return the updated array to be printed as a single line of space-separated integers.
 *
 * @format
 */

function rotLeft(a, d) {
	// I create a new Array with the length of a
	let arr = new Array(a);
	// I fill it with numbers from 1 to a.
	for (let i = 0; i < arr.length; i++) {
		arr[i] = i + 1;
	}
	// For each d time i remove the firt n y push it on the last position
	for (let j = 0; j < d; j++) {
		let moved = arr.shift();
		arr.push(moved);
		console.log(arr);
	}

	return arr;
}

console.log(rotLeft(5, 4));
