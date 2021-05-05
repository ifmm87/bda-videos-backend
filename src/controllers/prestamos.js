const { Prestamos } = require('../models');
const { listar, crear, mostrar, actualizar } = require('../utils/dao');
const { mensajeError, mensajeExito } = require('../utils/handleResponse');
const Debug = require('debug');
const debug = new Debug('Prestamos_controller:');
module.exports = {
  listar: async (req, res) => {
    try {
      const respuesta = await listar(Prestamos.db, {}, {}, {});
      mensajeExito(res, 'listado recuperado correctamente', 200, respuesta);
    } catch (error) {
      mensajeError(res, error, 400)
    }
  },
  listarDevueltos: async (req, res) => {
    debug('listando clientes');
    try {
      const respuesta = await Prestamos.db.find({devuelto: true});
      mensajeExito(res, 'listado recuperado correctamente', 200, respuesta);
    } catch (error) {
      mensajeError(res, error, 400)
    }
  },
 listarNoDevueltos: async (req, res) => {
    debug('listando clientes');
    try {
      const respuesta = await Prestamos.db.find({
        devuelto: false,
        fechaDevolucion: {
          '$lte': new Date()
        }
      });
      mensajeExito(res, 'listado recuperado correctamente', 200, respuesta);
    } catch (error) {
      mensajeError(res, error, 400)
    }
  },
  listarInfractores: async (req, res) => {
    debug('listando clientes');
    try {
      const respuesta = await Prestamos.db.find({
        devuelto: false,
        fechaDevolucion: {
          "$lte": new Date()
        }
      });
      mensajeExito(res, 'listado recuperado correctamente', 200, respuesta);
    } catch (error) {
      mensajeError(res, error, 400)
    }
  },
  mostrar: async (req, res) => {
    try {
      const { idPrestamo } = req.params;
      const respuesta = await mostrar(Prestamos.db, { id: idPrestamo });
      if (respuesta) {
        mensajeExito(res, 'Prestamo recuperado correctamente', 200, respuesta);
      } else {
        throw new Error ('No se encontro ningun prestamo.');
      }
    } catch (error) {
      mensajeError(res, error.message, 400);
    }
  },
  crear: async (req, res) => {
    try {
      const prestamo = req.body;
      const respuesta = await crear(Prestamos.db, prestamo);
      if (respuesta) {
        mensajeExito(res, 'El prestamo fue creado correctamente', 200, respuesta);
      } else {
        throw new Error('No se pudo guardar el Prestamo');
      }
    } catch (error) {
      mensajeError(res, error.message, 400);
    }
  },
  modificar: async (req, res) => {
    try {
      const { idPrestamo } = req.params;
      const prestamo = req.body;
      const respuesta = await actualizar(Prestamos.db, idPrestamo, prestamo, {})
      if (respuesta) {
        mensajeExito(res, 'El prestamo fue actualizado correctamente', 200, respuesta);
      }
    } catch (error) {
      mensajeError(res, error.message);
    }
  },
  eliminar: async (req, res) => {
    try {
      const { idPrestamo } = req.params;
      const respuesta = await eliminar(Prestamos.db, idPrestamo);
      if (respuesta) {
        mensajeExito(res, 'El prestamo se eliminó correctamente.', 200, respuesta);
      }
    } catch (error) {
      mensajeError(res, error.message, 400);
    }
  },
}
