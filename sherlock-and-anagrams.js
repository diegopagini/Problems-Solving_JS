/**
 *
 * Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string.
 * Given a string, find the number of pairs of substrings of the string that are anagrams of each other.
 *
 * @format
 */

const sum = (acc, next) => acc + next;
const matches = (val, i, arr) => {
	let count = 0;
	for (++i; i < arr.length; i++) {
		if (val == arr[i]) count++;
	}
	return count;
};

function sherlockAndAnagrams(s) {
	let strs = [];

	// get substring permutations
	for (let chunkSize = 1; chunkSize < s.length; chunkSize++) {
		let temp = [];

		// make array of sorted chunkSize substrings
		for (let i = 0; i <= s.length - chunkSize; i++) {
			temp.push(s.substr(i, chunkSize).split('').sort().join(''));
		}
		// count pairs
		temp = temp.map(matches);
		// add total
		strs.push(temp.reduce(sum));
	}

	return strs.reduce(sum);
}

console.log(sherlockAndAnagrams('abba'));
