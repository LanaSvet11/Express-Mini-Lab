const express = require("express");
const app = express();
const port = 3000;

const books = [
  { id: 1, title: "The Great Gatsby" },
  { id: 2, title: "To Kill a Mockingbird" },
  { id: 3, title: "1984" },
];

// Part 1: Setting Up the Express Server
app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (!book) {
    return res.status(404).send("Book not found");
  }
  res.send(`Book Title: ${book.title}`);
});

// Part 2: Handling Errors
app.get("/fixed-example/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);
  if (!book) {
    return res.status(404).send("Book not found");
  }
  res.send(`Book Title: ${book.title}`);
});

// Part 3: Managing Route Order
app.get("/books/long", (req, res) => {
  res.send("List of long books");
});

// Part 4: Handling Multiple Parameters
app.get("/greet/:firstname/:lastname", (req, res) => {
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
