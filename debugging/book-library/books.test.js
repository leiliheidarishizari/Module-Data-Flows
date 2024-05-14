import { createBook, addBook, removeBook } from "./books";

describe("addBook", () => {
  test("adds valid book to list", () => {
    const books = [];
    const newBook = createBook("ABC", "Author", 100, false);

    const updatedBooks = addBook(books, newBook);

    expect(updatedBooks).toEqual([newBook]);
  });

  test("does not add invalid book missing fields", () => {
    const books = [];
    const invalidBook = createBook("ABC");

    const updatedBooks = addBook(books, invalidBook);

    expect(updatedBooks).toEqual([]);
  });
});

describe("removeBook", () => {
  test("removes book at index", () => {
    const books = [
      createBook("A", "A", 1),
      createBook("B", "B", 2),
      createBook("C", "C", 3),
    ];

    const updatedBooks = removeBook(books, 1);

    expect(updatedBooks).toEqual([
      createBook("A", "A", 1),
      createBook("C", "C", 3),
    ]);
  });
});
  });
});
