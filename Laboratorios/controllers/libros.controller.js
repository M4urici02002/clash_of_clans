// Archivo: controllers/libros.controller.js

const Libro = require('../models/libro.model'); // Asegúrate de tener el modelo correcto

exports.getAgregarLibro = (request, response, next) => {
    response.render('add'); // Asegúrate de tener la vista correcta
};

exports.postAgregarLibro = (request, response, next) => {
    const nuevoLibro = new Libro(
        request.body.titulo,
        request.body.autor,
        request.body.descripcion,
        request.body.imagen
    );
    nuevoLibro.save();
    response.redirect('/');
};

exports.getLibros = (request, response, next) => {
    const libros = Libro.fetchAll();
    response.render('libros', { // Asegúrate de tener la vista correcta
        libros: libros,
    });
};
