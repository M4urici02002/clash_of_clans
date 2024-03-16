const express = require('express');

const router = express.Router();

// Book data
const books = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    description: "A famous novel that tells the story of the Buendía family over seven generations in the fictional town of Macondo.",
    image: "https://m.media-amazon.com/images/I/A1lNJP8sC6L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    description: "A classic piece of literature on the importance of friendship, love, and the search for the meaning of life.",
    image: "https://sarasvatilibreria.com/cdn/shop/products/el-principito-portada-blanca-antoine-de-saint-exupery-205894.jpg?v=1698902528"
  }
];

// HTML templates
const htmlHeader = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Book Management</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>
<body>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="https://static.vecteezy.com/system/resources/previews/008/147/482/non_2x/modern-bookstore-logo-design-illustration-vector.jpg" width="90" height="50" alt="Logo">
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">Home</a>
        <a class="navbar-item" href="/add">Add Book</a>
      </div>
    </div>
  </nav>
  <section class="section">
    <div class="container">
`;

const htmlFooter = `
    </div>
  </section>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Book Management</strong> - An example application.
      </p>
    </div>
  </footer>
</body>
</html>
`;

// Route for displaying the home page with all books
router.get('/', (request, response) => {
  let htmlContent = books.map(book => `
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="${book.image}" alt="Cover of the book ${book.title}">
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-4">${book.title}</p>
        <p class="subtitle is-6">${book.author}</p>
        <div class="content">${book.description}</div>
      </div>
    </div>
  `).join('');

  response.send(htmlHeader + '<h1 class="title">Available Books</h1>' + htmlContent + htmlFooter);
});

// Route for showing the add book form
router.get('/add', (request, response) => {
  const formHtml = `
    <h2 class="title">Add a New Book</h2>
    <form action="/add" method="POST">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" name="title" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Author</label>
        <div class="control">
          <input class="input" type="text" name="author" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea class="textarea" name="description" required></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Image URL</label>
        <div class="control">
          <input class="input" type="text" name="image" required>
        </div>
      </div>
      <div class="control">
        <button type="submit" class="button is-primary">Add Book</button>
      </div>
    </form>
  `;

  response.send(htmlHeader + formHtml + htmlFooter);
});

// Additional routes can be added here

module.exports = router;
