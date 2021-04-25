const express = require('express');
const app = express.Router();
const { Clientes } = require('../controllers');
app.get('/', Clientes.listar);
app.get('/:idCliente', Clientes.mostrar);
app.post('/', Clientes.crear);
app.put('/:idCliente', Clientes.modificar);
app.delete('/:idCliente', Clientes.eliminar);
module.exports = app;
