const express = require('express');
const app = express();

// Desde Express 4.16 en adelante, body-parser fue re-añadido bajo los métodos express.*
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Middleware de ejemplo para mostrar cómo funciona
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); // Permite a la petición avanzar hacia el siguiente middleware en la cadena
});

// Importa las rutas de libros
const rutasLibros = require('./routes/libros.routes');

// Usa las rutas de libros como middleware, asociándolas a la raíz '/'
app.use('/', rutasLibros);

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

