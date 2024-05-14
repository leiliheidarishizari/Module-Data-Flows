import { addBook, removeBook, createBook, books } from "./books.js";

// UI logic

const addNewBook = (book) => {
  books = addBook(books, book);
  render();
};

const removeSelectedBook = (index) => {
  books = removeBook(books, index);
  render();
};

// get form elements
const form = document.getElementById("add-book");
const title = document.getElementById("titleInput");
const author = document.getElementById("authorInput");
const pages = document.getElementById("pagesInput");
const read = document.getElementById("readInput");

// Render UI
const render = () => {
  const template = document.getElementById("book-row");

  const rows = books.map((book) => {
    const row = template.content.cloneNode(true);

    row.querySelector("[title]").textContent = book.title;
    row.querySelector("[author]").textContent = book.author;
    row.querySelector("[pages]").textContent = book.pages;
    row.querySelector("[read]").textContent = book.read;

    const removeBtn = row.querySelector("[remove]");

    removeBtn.addEventListener("click", () => {
      removeSelectedBook(books.indexOf(book));
    });

    bookList.appendChild(row);
  });
};

// Event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newBook = createBook(
    title.value,
    author.value,
    pages.value,
    read.checked
  );
  addNewBook(newBook);
});

export { title, author, pages, read };
