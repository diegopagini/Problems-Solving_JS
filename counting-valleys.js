/**
 *
 * https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview
 * -preparation-kit&playlist_slugs%5B%5D=warmup
 *
 * A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step
 *  down to sea level.
 *
 * A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with
 * a step up to sea level.
 *
 * @format
 */

function countingValleys(n, s) {
	const steps = s.split('');
	let valleyCount = 0;
	let currentSeaLevel = 0;
	let valleyStatus = false;

	steps.forEach((step) => {
		step === 'U' ? currentSeaLevel++ : currentSeaLevel--;

		if (currentSeaLevel < 0 && !valleyStatus) {
			valleyCount++;
			valleyStatus = true;
		} else if (currentSeaLevel >= 0 && valleyStatus) {
			valleyStatus = false;
		}
	});

	return valleyCount;
}

console.log(countingValleys(12, 'DDUUDDUDUUUD'));
