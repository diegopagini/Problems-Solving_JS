/**
 *
 * You are given q queries. Each query is of the form two integers described below:
 * 1 x : Insert x in your data structure.
 * 2 y : Delete one occurence of y from your data structure, if present.
 * 3 z : Check if any integer is present whose frequency is exactly . If yes, print 1 else 0.
 *
 * The queries are given in the form of a 2-D array queries of size q where queries[i][0] contains the operation,
 * and queries[i][1] contains the data element.
 *
 * @format
 */

function freqQuery(queries) {
	const numbers = {};
	const counts = {};
	const result = [];

	queries.forEach(([operation, number]) => {
		switch (operation) {
			case 1: // Insert
				numbers[number] = numbers[number] || 0;
				if (numbers[number] > 0) {
					counts[numbers[number]] -= 1;
				}
				numbers[number] += 1;
				counts[numbers[number]] = (counts[numbers[number]] || 0) + 1;
				break;

			case 2: // Delete
				if (numbers[number] > 0) {
					counts[numbers[number]] -= 1;
					numbers[number] -= 1;
					counts[numbers[number]] = (counts[numbers[number]] || 0) + 1;
				}
				break;

			case 3: // Check
				result.push(counts[number] > 0 ? 1 : 0);
				break;
		}
	});
	return result;
}
