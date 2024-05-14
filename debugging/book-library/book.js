import { title, author, pages, read } from "./index.js";

const createBook = (title, author, pages, read) => {
  const book = {
    title,
    author,
    pages,
    read,
  };
  return book;
};

export default createBook;
