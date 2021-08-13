/**
 *
 * Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 4
 * 1 to 100 for three categories: problem clarity, originality, and difficulty.
 * The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is
 * the triplet b = (b[0], b[1], b[2]).
 *
 * @format
 */

function compareTriplets(a, b) {
	const points = {
		alice: 0,
		bob: 0,
	};

	for (let i = 0; i < a.length; i++) {
		if (a[i] > b[i]) {
			points.alice++;
		} else if (b[i] > a[i]) {
			points.bob++;
		}
	}

	return points;
}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
