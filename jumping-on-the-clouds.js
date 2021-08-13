/**
 *
 * There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and
 * others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current
 * cloud plus 1 or 2 . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump
 * from the starting postion to the last cloud. It is always possible to win the game.
 *
 * For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.
 * @format
 */

function jumpingOnClouds(clouds) {
	const min = 0;
	const max = 100;
	let jumps = 0;

	if (clouds.length >= min && clouds.length <= max) {
		jumps = findPaths(clouds, []);
	}

	return typeof jumps === 'number' ? jumps : jumps.length;
}

function findPaths(clouds, paths) {
	if (clouds.length > 1) {
		let path1 = paths.slice();
		let path2 = paths.slice();

		path1 = clouds[1] !== 1 ? [...path1, 1] : 0;
		path2 = clouds[2] !== 1 ? [...path2, 2] : 0;

		if (path1 === 0 && path2 === 0) {
			paths = 0;
		} else if (path1 !== 0 && path2 === 0) {
			return findPaths(clouds.slice(1), path1);
		} else if (path1 === 0 && path2 !== 0) {
			return findPaths(clouds.slice(2), path2);
		} else if (path1 !== 0 && path2 !== 0) {
			path1 = findPaths(clouds.slice(1), path1);
			path2 = findPaths(clouds.slice(2), path2);
			return path1.length < path2.length ? path1 : path2;
		}
	}

	return paths;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
