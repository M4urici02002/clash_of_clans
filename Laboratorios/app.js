const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Crea una instancia de Express
const app = express();

// Configura EJS como el motor de plantillas
app.set('view engine', 'ejs');
app.set('views', 'views');

// Configura el middleware para manejar sesiones
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
  resave: false, // La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, // Asegura que no se guarde una sesión para una petición que no lo necesita
}));

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configura body-parser para procesar los datos enviados por POST
app.use(bodyParser.urlencoded({extended: false}));

// Configura cookie-parser para manejar cookies
app.use(cookieParser());

// Middleware de ejemplo para mostrar cómo funciona el middleware en Express
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); // Permite a la petición avanzar hacia el siguiente middleware
});

// Importa y usa las rutas de usuarios y libros
const rutasUsuarios = require('./routes/users.routes');
const rutasLibros = require('./routes/libros.routes'); // Asegúrate de que este nombre coincida con el nombre del archivo en tu proyecto

// Usa las rutas de usuarios y libros como middleware, asociándolas a sus respectivas rutas
app.use('/users', rutasUsuarios);
app.use('/', rutasLibros); // Aquí se corrige para usar rutasLibros en lugar de rutasClases

// Middleware para manejar errores 404, enviando el archivo 404.html
app.use((request, response, next) => {
  response.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
