const { Clientes } = require('../models');
const { listar, crear, mostrar, actualizar } = require('../utils/dao');
const { mensajeError, mensajeExito } = require('../utils/handleResponse');
const { validaObligatorio,
  validaEntrada,
  armaRecuperar,
  armaContrastar,
  resolverRespuestaRecuperar,
  resolverRespuestaContrastacion } = require('../middleware/validador');
const Debug = require('debug');
const debug = new Debug('controller-clientes:');
module.exports = {
  listar: async (req, res) => {
    debug('listando clientes');
    try {
      const respuesta = await listar(Clientes.db, {}, {}, {});
      mensajeExito(res, 'listado recuperado correctamente', 200, respuesta);
    } catch (error) {
      mensajeError(res, error, 400)
    }
  },
  mostrar: async (req, res) => {
    try {
      const { idCliente } = req.params;
      const respuesta = await mostrar(Clientes.db, { id: idCliente });
      if (respuesta) {
        mensajeExito(res, 'Configuración recuperada correctamente', 200, respuesta);
      } else {
        throw new Error ('No se encontro ninguna configuración');
      }
    } catch (error) {
      debug(error);
      mensajeError(res, error.message, 400);
    }
  },
  crear: async (req, res) => {
    try {
      const cliente = req.body;
      if (!cliente) {
        throw new Error('Los campos del cliente son obligatorios');
      }
      const respuesta = await crear(Clientes.db, cliente);
      mensajeExito(res, 'El cliente fue creado exitosamente', 200, respuesta);
    } catch (error) {
      debug(error);
      mensajeError(res, error.message, 400);
    }
  },
  modificar: async (req, res) => {
    try {
      const { idCliente } = req.params;
      const cliente = req.body;
      const respuesta = await actualizar(Clientes.db, idCliente, cliente)
      mensajeExito(res, 'El cliente fue actualizado correctamente', 200, respuesta);
    } catch (error) {
      debug(error);
      mensajeError(res, error.message);
    }
  },
  bloquear: async (req, res) => {
    try {
      const { idCliente } = req.params;
      const cliente = req.body;
      const respuesta = await actualizar(Clientes.db, idCliente, cliente)
      mensajeExito(res, 'El cliente fue bloquedo correctamente', 200, respuesta);
    } catch (error) {
      debug(error);
      mensajeError(res, error.message, 400);
    }
  },
  eliminar: async (req, res) => {
    try {
      const { idCliente } = req.params;
      const respuesta = await eliminar(Clientes.db, idCliente);
      mensajeExito(res, 'El cliente se eliminó correctamente.', 200, respuesta);
    } catch (error) {
      debug(error);
      mensajeError(res, error.message, 400);
    }
  }
}
