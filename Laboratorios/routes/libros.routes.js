const express = require('express');
const router = express.Router();

// Data de libros
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

router.get('/add', (request, response) => {
  response.render('add');
});

router.post('/add', (request, response) => {
  const newBook = {
      title: request.body.title,
      author: request.body.author,
      description: request.body.description,
      image: request.body.image
  };
  books.push(newBook); // Añade el nuevo libro al arreglo
  response.redirect('/'); // Redirige al usuario a la página principal
});

// Ruta para mostrar todos los libros
router.get('/', (request, response) => {
  response.render('libros', { books }); // Pasa el arreglo de libros a la vista
});

module.exports = router;
