// Define your Book class here:

class Book {
  constructor(title, author, copyright, isbn, pages, timesBorrowed, discard) {
    this.title = title;
    this.author = author;
    this.copyright = copyright;
    this.isbn = isbn;
    this.pages = pages;
    this.timesBorrowed = timesBorrowed;
    this.discard = discard;
  }
  checkout(uses = 1) {
    this.timesBorrowed += uses;
  }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
  constructor(title, author, copyright, isbn, pages, timesBorrowed, discard) {
    super(title, author, copyright, isbn, pages, timesBorrowed, discard);
  }
  dispose(currentYear) {
    currentYear - this.copyright > 5
      ? (this.discard = "Yes")
      : (this.discard = "No");
  }
}

class Novel extends Book {
  constructor(title, author, copyright, isbn, pages, timesBorrowed, discard) {
    super(title, author, copyright, isbn, pages, timesBorrowed, discard);
  }
  dispose() {
    this.timesBorrowed > 100 ? (this.discard = "Yes") : (this.discard = "No");
  }
}

// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel(
  "Pride and Prejudice",
  "Austen, Jane",
  1813,
  "1111111111111",
  432,
  32,
  "No"
);

let topSecretShuttleBuildingManual = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  "0000000000000",
  1147,
  1,
  "No"
);

console.log(prideAndPrejudice);
console.log(topSecretShuttleBuildingManual);

// Code exercises 4 & 5 here:

topSecretShuttleBuildingManual.dispose(2024);
console.log(topSecretShuttleBuildingManual);

prideAndPrejudice.checkout(5);
console.log(prideAndPrejudice.timesBorrowed);
