const express = require('express');
const app = express.Router();
const { Prestamos } = require('../controllers');
app.get('/', Prestamos.listar);
app.get('/:idPrestamo', Prestamos.mostrar);
app.post('/', Prestamos.crear);
app.put('/:idPrestamo', Prestamos.modificar);
app.delete('/', Prestamos.eliminar);
module.exports = app;
