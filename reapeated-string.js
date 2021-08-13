/**
 *
 * There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n,
 * find and print the number of letter a's in the first  letters of the infinite string.
 * @format
 */

function repeatedString(s, n) {
	const substring = s.slice(0, n).split('');
	const onlyCharacterA = substring.filter((el) => el === 'a');
	return onlyCharacterA.length;
}

console.log(repeatedString('aba', 10));
