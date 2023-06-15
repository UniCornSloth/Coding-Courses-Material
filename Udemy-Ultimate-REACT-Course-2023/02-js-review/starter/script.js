const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
//Destructuring
const book = getBook(1);
book;

// const title = book.title
// const author = book.author

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

//SPREAD OPERATORS
const newGenres = [...genres, "epic fantasy"];
genres;

// OBJECTS
// Takes all properties of the object into new object
const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Overwriting an existing property
  pages: 1210,
};
updatedBook;
// Create a string summary using tempelate literal
// Arrow funtion
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
summary;

//Ternery operator
// Always return value
const pagesRange = pages > 1000 ? "over a thousand" : " less than a thousand";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

// Short circutting truthy and falsy values
console.log(true && "some string");
console.log(false && " some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy values: 0, '', undefined
console.log("harry" && "Some string");
console.log(0 && "Some string");

// Or operator in short circutting
console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);
const spanishTranslations = book.translations.spanish || "NOT translated";
spanishTranslations;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// // nullish coalessing operator '??'
// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// Optional Chaining '?'
// Use it if not sure on the data structure and data being recieved
function getTotalReviewCount(book) {
    const goodreads = book.reviews?.goodreads?.reviewsCount
    const librarything = book.reviews?.librarything?.reviewsCount ?? 0
    librarything
    return goodreads + librarything
}

console.log(getTotalReviewCount(book))
*/
////////////////////////////////////////////////////////////////////////////////////////////////
/*
// Functional array methods
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const books = getBooks();
books;
//map method
// map() is a function that loops and calls a function for each element in the array
// const x = [1,2,3,4,5].map((el) => el * 2)
// console.log(x);

// Array with all titles
// book = each of the elements in the [] array
const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

// Array filter Method
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Reduce method
// Reduce is a function that loops through an array and returns a single value
// acc = sum = value on to wich the elements pages is added
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// Array sort method
// sort() is a function that sorts an array
// slice() to create new array instead of mutating original array
const x = [3, 6, 5, 8, 10, 4, 2];
const sorted = x.slice().sort((a, b) => a - b);
x;
sorted;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// Imutable Arrays
// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the chamber of secrets",
  author: "J.K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
*/
///////////////////////////////////////////////////////////////////////////////////////////////
//Promises
// Promises are objects that represent the eventual completion or failure of an asynchronous operation
// fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(data => console.log(data));

// Async await
// Async await is a way to write asynchronous code that looks like synchronous code
// Async await is a syntactic sugar over promises
async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()
  console.log(data);
}
getTodos()

console.log("harry")