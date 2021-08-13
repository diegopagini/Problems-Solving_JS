/**
 *
 * Given two strings, determine if they share a common substring. A substring may be as small as one character.
 * @format
 */
function twoStrings(s1, s2) {
	const result =
		s1.split('').filter((el) => s2.indexOf(el) > -1).length > 0 ? 'YES' : 'NO';

	return result;
}
console.log(twoStrings('hello', 'world'));
console.log(twoStrings('hi', 'world'));
