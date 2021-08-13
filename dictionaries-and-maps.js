/**
 *
 * Task: Create a dictionary which holds an unknown amount of names and associated phone numbers.
 * This phone book dictionary must then output the results as name=phonenumber.
 *
 * So it appears that I chose the wrong language to work through this task with. One of the test cases HackerRank uses features over 10,
 * 000 values for the phonebook to be filled with – and JavaScript would time out on this one specifically. As a result of not
 * understanding this, I did finally come upon (and modified) a working JavaScript solution.
 *
 * Process: The very first step is to get the input (number of entries, name, phone number) and split on the \n (newline). Our number of
 * entries, n, is filled by using parseInt on the input – this should collect the “3” initially put in by HackerRank. Their input is “3
 * sam 99912222” so 3 is first up and easily grabbed. Initialize a phoneBook dictionary.
 *
 * Then the values are added to the phoneBook via a for statement. Starting at 0 and going until = n, input value is added to newinput.
 * Newinput is split with a space character and then finally we place it into phoneBook. Then you check if the values are in the
 * dictionary with a second for statement. This simply grabs the input value and checks if “undefined.” If undefined, then output “Not
 * found” and otherwise output name[i]=phonenumber.
 * @format
 */
function processData(input) {
	const arr = input.split('\n'); // ['3','sam 99912222','tom 11122222','harry 12299933','sam','edward','harry']
	const n = parseInt(arr[0]); // 3
	let phoneBook = [];

	for (let i = 0; i < n; i++) {
		let newInput = arr[i + 1].split(' ');
		phoneBook[newInput[0]] = newInput[1];
	}
	// [ sam: '99912222', tom: '11122222', harry: '12299933' ]

	for (let i = n + 1; i < arr.length; i++) {
		let position = phoneBook[arr[i]];
		if (position !== undefined) {
			console.log(input[i] + '=' + position);
		} else {
			console.log('Not found');
		}
	}
}

processData(
	'3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry'
);
