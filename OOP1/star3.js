class Book {
  constructor(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  }
}
function logBook(book) {
  console.log(`${book.title} by ${book.author}`);
}
function yetToBeRead(books) {
  for (let index = 0; index < books.length; index++) {
    if (books[index].isRead === false) {
      logBook(books[index]);
    }
  }
}

let books = [3];
books[0] = new Book("Harry Potter", "J. K. Rowling", true);
books[1] = new Book("Song of ice and fire", "George R. R. Martin", false);
books[2] = new Book("catching fire", "Somebody", false);
yetToBeRead(books);
let books2 = [2];
books[0] = new Book("smtnelse1", "J. Rowling", false);
books[1] = new Book("smtngelse2", "George R.Martin", false);
books[2] = new Book("catching fire", "Somebody", false);
yetToBeRead(books);
let books3 = [4];
books[0] = new Book("Harry Potter", "J. K. Rowling", true);
books[1] = new Book("Song of ice and fire", "George R. R. Martin", false);
books[2] = new Book("catching fire", "Somebody", false);
books[2] = new Book("catching fire", "Somebody", true);
yetToBeRead(books);

function test_equal(actual, expected, msg) {
  if (Array.isArray(expected)) {
    for (var i = 0; i < expected.length; i++) {
      test_equal(actual[i], expected[i], "item in index " + i);
    }
  } else if (typeof expected === "object") {
    for (prop in expected) {
      test_equal(actual[prop], expected[prop]);
    }
  } else {
    if (actual !== expected) {
      console.log(
        `Error testing ${msg || ""}. expected: ${expected}, got ${actual}`
      );
    }
  }
}
