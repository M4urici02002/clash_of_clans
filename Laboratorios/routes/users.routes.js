const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');

// Ruta para mostrar el formulario de inicio de sesión
router.get('/login', usersController.get_login);

// Ruta para procesar los datos del formulario de inicio de sesión
router.post('/login', usersController.post_login);

// Ruta para cerrar la sesión del usuario
router.get('/logout', usersController.get_logout);

module.exports = router;
