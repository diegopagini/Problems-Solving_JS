/**
 * Given a Book class and a Solution class, write a MyBook class that does the following:
 *
 * Inherits from Book
 * Has a parameterized constructor taking these  parameters:
 * string title
 * string author
 * int price
 * Implements the Book class' abstract display() method so it prints these 3 lines:
 * 1. Title:, a space, and then the current instance's title.
 * 2. Author:, a space, and then the current instance's author.
 * 3., Price:, a space, and then the current instance's price.
 *
 * @format
 */

class Book {
	constructor(title, author, price) {
		this.title = title;
		this.author = author;
		this.price = price;
	}
}

class MyBook extends Book {
	constructor(title, author, price) {
		super(title, author);

		this.price = price;
	}

	display() {
		console.log(
			`Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price}`
		);
	}
}

let book = new MyBook('The Alchemist', 'Paulo Coelho', 248);
book.display();
