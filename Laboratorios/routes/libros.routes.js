// Archivo: routes/libros.routes.js

const express = require('express');
const router = express.Router();

const librosController = require('../controllers/libros.controller');

router.get('/add', librosController.getAgregarLibro);

router.post('/add', librosController.postAgregarLibro);

router.get('/', librosController.getLibros);

module.exports = router;
