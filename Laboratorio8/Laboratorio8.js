const http = require('http');
const filesystem = require("fs");
const path = require('path');

filesystem.writeFileSync("Laboratorio8.txt", "Este es mi laboratorio 8");

const arreglo = [2, 6, 9, 1, 12, 8, 0, 15, 20, 34, 17, 5];

function imprimirPromedio(arr) {
    const promedio = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
    setTimeout(() => {
        console.log(promedio);
    }, promedio);
}
imprimirPromedio(arreglo);
 
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      let output = '';
      if (i % 3 === 0) output += 'Fizz';
      if (i % 5 === 0) output += 'Buzz';
      console.log(output || i);
    }
  }
fizzBuzz(20);

const html_header = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Clash of clans</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://previews.123rf.com/images/pixelsaway/pixelsaway1208/pixelsaway120800010/14780611-laboratorio-palabra-aislado-en-tipograf%C3%ADa-tipo-de-madera-de-%C3%A9poca.jpg" width="112" height="28">
      </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>
  
        <a class="navbar-item">
          Documentation
        </a>
  
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
  
          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
`;

const html_footer = `
    <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
    </footer>
  </body>
</html>
`;

const server = http.createServer((request, response) => {    
    
    console.log(request.url);

    if (request.url == "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        response.write(`
            <section class='section'>
                <div class='container has-text-centered'>
                    <h2 class="title">Este es mi Laboratorio 8</h2>
                    <a href="/Laboratorio6" class="button is-primary">Ir a otra página</a>
                </div>
            </section>
        `);
        response.write(html_footer);
        response.end();
    } else if (request.url == "/Laboratorio6") {
        const filePath = path.join(__dirname, 'Laboratorio6.html');
          filesystem.readFile(filePath, (err, data) => {
            if (err) {
                response.statusCode = 500;
                response.setHeader('Content-Type', 'text/plain');
                response.end('Error al cargar la página');
            } else {
                response.setHeader('Content-Type', 'text/html');
                response.end(data);
            }
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header);
        response.write(`<h2 class="title">Esta página dejó de existir</h2>`);
        response.write(html_footer);
        response.end();
    }
});

const PORT = 9000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
