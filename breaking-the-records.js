/**
 *
 * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play.
 * She tabulates the number of times she breaks her season record for most points and least points in a game.
 * Points scored in the first game establish her record for the season, and she begins counting from there.
 *
 * @format
 */
function breakingRecords(scores) {
	let min = scores[0];
	let max = scores[0];

	let lowestScores = 0;
	let highestScores = 0;

	for (const score of scores) {
		if (max < score) {
			max = score;
			highestScores++;
		} else if (score < min) {
			min = score;
			lowestScores++;
		}
	}

	return [highestScores, lowestScores];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
