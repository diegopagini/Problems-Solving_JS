/**
 *
 * Comparators are used to compare two objects. In this challenge, you'll create a comparator and use it to sort an array.
 * The Player class is provided in the editor below. It has two fields:
 *
 * name: a string.
 * score: an integer.
 * Given an array of N Player objects, write a comparator that sorts them in order of decreasing score. If 2 or more players
 * have the same score, sort those players alphabetically ascending by name. To do this, you must create a Checker
 * class that implements the Comparator interface, then write an int compare(Player a, Player b) method implementing the
 * Comparator.compare(T o1, T o2) method. In short, when sorting in ascending order, a comparator function returns -1 if a < b,
 * 0 if a = b, and 1 if a > b.
 *
 * Declare a Checker class that implements the comparator method as described. It should sort first descending by score,
 * then ascending by name. The code stub reads the input, creates a list of Player objects, uses your method to sort the data,
 * and prints it out properly.
 *
 * @format
 */
class Cheker {
	arr;
	constructor(arr) {
		this.arr = arr;
	}

	compare() {
		// Sort the array by score:
		const arrSortedByScore = this.arr.sort((a, b) => b.score - a.score);
		// Them, sort de array by name:
		const arrSortedByName = arrSortedByScore.sort((a, b) =>
			a.name > b.name ? 1 : b.name > a.name ? -1 : 0
		);

		return arrSortedByName;
	}
}

let comparator = new Cheker([
	{ name: 'amy', score: 100 },
	{ name: 'david', score: 100 },
	{ name: 'heraldo', score: 50 },
	{ name: 'aakansha', score: 75 },
	{ name: 'aleksa ', score: 150 },
]);

comparator.compare();
