import createBook from "./book";

describe("createBook", () => {
  test("should create a book object", () => {
    const title = "The Shining";
    const author = "Stephen King";
    const pages = 447;
    const read = true;
    const book = createBook(title, author, pages, read);

    expect(book).toEqual({
      title: "The Shining",
      author: "Stephen King",
      pages: 447,
      read: true,
    });
  });
});
