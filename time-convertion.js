/**
 *
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
 *
 * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 *
 * @format
 */

function timeConversion(s) {
	const parsedTime = s.split(':');
	const hourlyTime = parsedTime[2].slice(2, 4);
	if (hourlyTime === 'PM') {
		parsedTime[0] =
			parsedTime[0] === '12' ? '12' : parseInt(parsedTime[0]) + 12;
		console.log(parsedTime.join(':').slice(0, s.length - 2));
	} else {
		parsedTime[0] = parsedTime[0] === '12' ? '00' : parsedTime[0];
		console.log(parsedTime.join(':').slice(0, s.length - 2));
	}
}

timeConversion('12:05:45PM');
