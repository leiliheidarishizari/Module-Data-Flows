import createBook from "./book.js";
const addBook = (books, newBook) => [...books, newBook];

// removeBook removes the book at the given index from the list of books
const removeBook = (books, index) => [
  ...books.slice(0, index),
  ...books.slice(index + 1),
];

export { createBook, addBook, removeBook };
