/**
 * Sam's house has an apple tree and an orange tree that yield an abundance of fruit.
 * determine the number of apples and oranges that land on Sam's house.
 *
 * @format
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
	let appleCount = 0;
	let orangeCount = 0;
	for (let i = 0; i < apples.length; i++) {
		if (a + apples[i] >= s && a + apples[i] <= t) {
			appleCount++;
		}
	}
	for (let j = 0; j < oranges.length; j++) {
		if (b + oranges[j] <= t && b + oranges[j] >= s) {
			orangeCount++;
		}
	}
	console.log(appleCount);
	console.log(orangeCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
