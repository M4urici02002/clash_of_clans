const http = require('http');
const filesystem = require("fs");
const querystring = require('querystring');

// Datos iniciales de los libros
const libros = [
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    descripcion: "Una famosa novela que narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.",
    imagen: "https://m.media-amazon.com/images/I/A1lNJP8sC6L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    descripcion: "Un clásico de la literatura sobre la importancia de la amistad, el amor y la búsqueda del sentido de la vida.",
    imagen: "https://sarasvatilibreria.com/cdn/shop/products/el-principito-portada-blanca-antoine-de-saint-exupery-205894.jpg?v=1698902528"
  }
];

// Cabecera y pie de página HTML
const html_header = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Gestión de Libros</title>
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
        <a class="navbar-item" href="/">Inicio</a>
        <a class="navbar-item" href="/agregar">Agregar Libro</a>
      </div>
    </div>
  </nav>
  <section class="section">
    <div class="container">
`;


const html_footer = `
    </div>
  </section>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Gestión de Libros</strong> - Laboratorio 10 .
      </p>
    </div>
  </footer>
</body>
</html>
`;

// Creación del servidor
const server = http.createServer((request, response) => {
  if (request.url === "/" && request.method === "GET") {
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header);
    response.write('<h1 class="title">Libros Disponibles</h1><div class="columns is-multiline">');
    libros.forEach(libro => {
      response.write(`
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="${libro.imagen}" alt="Portada del libro ${libro.titulo}">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">${libro.titulo}</p>
                  <p class="subtitle is-6">${libro.autor}</p>
                </div>
              </div>
              <div class="content">${libro.descripcion}</div>
            </div>
          </div>
        </div>
      `);
    });
    response.write('</div>');
    response.write(html_footer);
    response.end();
  } else if (request.url === "/agregar" && request.method === "GET") {
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header);
    response.write(`
      <h2 class="title">Agregar un nuevo libro</h2>
      <form action="/agregar" method="POST">
        <div class="field">
          <label class="label" for="titulo">Título</label>
          <div class="control">
            <input class="input" type="text" id="titulo" name="titulo" required>
          </div>
        </div>
        <div class="field">
          <label class="label" for="autor">Autor</label>
          <div class="control">
            <input class="input" type="text" id="autor" name="autor" required>
          </div>
        </div>
        <div class="field">
          <label class="label" for="descripcion">Descripción</label>
          <div class="control">
            <textarea class="textarea" id="descripcion" name="descripcion" required></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label" for="imagen">URL de la imagen</label>
          <div class="control">
            <input class="input" type="text" id="imagen" name="imagen" required>
          </div>
        </div>
        <div class="control">
          <button type="submit" class="button is-primary">Agregar Libro</button>
        </div>
      </form>
    `);
    response.write(html_footer);
    response.end();
  } else if (request.url === "/agregar" && request.method === "POST") {
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString();
    });
    request.on('end', () => {
      const datosLibro = querystring.parse(body);
      libros.push({
        titulo: datosLibro.titulo,
        autor: datosLibro.autor,
        descripcion: datosLibro.descripcion,
        imagen: datosLibro.imagen
      });
      response.writeHead(302, {Location: '/'});
      response.end();
    });
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write('<h2>404 - Pagina no encontrada</h2>');
    response.end();
  }
});

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
