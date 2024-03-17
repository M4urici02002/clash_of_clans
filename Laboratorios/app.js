const express = require('express');
const path = require('path');
require('dotenv').config(); // Cargar variables de entorno desde un archivo .env

const app = express();

// Configura EJS como el motor de plantillas
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware para procesar datos de formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Importa las rutas de libros
const rutasLibros = require('./routes/libros.routes');

// Usa las rutas de libros como middleware, asociándolas a la raíz '/'
app.use('/', rutasLibros);

// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    // Alternativamente, si prefieres usar una plantilla EJS para el error 404, asegúrate de tener una vista '404.ejs' en tu carpeta 'views'
    // y usa res.status(404).render('404');
});

// Define el puerto desde una variable de entorno o usa 3000 por defecto
const port = process.env.PORT || 3000;

// Inicia el servidor en el puerto configurado
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
