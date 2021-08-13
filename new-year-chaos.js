/**
 * It is New Year's Day and people are in line for the Wonderland rollercoaster ride.
 * Each person wears a sticker indicating their initial position in the queue from 1 to n.
 * Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker.
 * One person can bribe at most two others.
 * Determine the minimum number of bribes that took place to get to a given queue order.
 * Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
 *
 * @format
 */

function minimumBribes(q) {
	let swaps = 0;

	for (let i = 0; i < q.length; i++) {
		let bribes = q[i] - (i + 1);
		// console.log(bribes, q[i], i + 1);
		let maxAdvance = q[i] - 2 > 0 ? q[i] - 2 : 0;
		// console.log(maxAdvance);

		if (bribes > 2) {
			console.log('Too chaotic');
			return;
		}

		for (let j = maxAdvance; j < i; j++) {
			if (q[j] > q[i]) swaps++;
			// console.log(swaps, q[j], q[i]);
		}
	}
	console.log(swaps);
}

minimumBribes([1, 2, 3, 5, 4, 6, 7, 8]);
