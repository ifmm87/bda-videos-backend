const { Videos } = require('../models');
const { listar, crear, mostrar, actualizar } = require('../utils/dao');
const { mensajeError, mensajeExito } = require('../utils/handleResponse');
const Debug = require('debug');
const debug = new Debug('videos_controller');
module.exports = {
  listar: async (req, res) => {
    try {
      const respuesta = await listar(Videos.db, {}, {}, {});
      mensajeExito(res, 'listado recuperado correctamente', 200, respuesta);
    } catch (error) {
      mensajeError(res, error, 400)
    }
  },
  mostrar: async (req, res) => {
    try {
      const { idVideo } = req.params;
      const respuesta = await mostrar(Videos.db, { id: idVideo });
      //const respuesta = await Configuracion.db.findOne({ _id: idConfiguracion });
      if (respuesta) {
        mensajeExito(res, 'Video recuperado correctamente.', 200, respuesta);
      } else {
        throw new Error ('No se encontro ningun registro.');
      }
    } catch (error) {
      mensajeError(res, error.message, 400);
    }
  },
  crear: async (req, res) => {
    try {
      const video = req.body;
      const respuesta = await crear(Videos.db, video);
      if (respuesta) {
        mensajeExito(res, 'El video fue creado correctamente', 200, respuesta);
      } else {
        throw new Error('No se pudo guardar el video');
      }
    } catch (error) {
      debug(error);
      mensajeError(res, error.message, 400);
    }
  },
  modificar: async (req, res) => {
    try {
      const { idVideo } = req.params;
      const video = req.body;
      const respuesta = await actualizar(Videos.db, idVideo, video)
      if (respuesta) {
        mensajeExito(res, 'El video fue actualizado correctamente', 200, respuesta);
      }
    } catch (error) {
      mensajeError(res, error.message);
    }
  },
  eliminar: async (req, res) => {
    try {
      const { idVideo } = req.params;
      const respuesta = await eliminar(Videos.db, idVideo);
      if (respuesta) {
        mensajeExito(res, 'El video se eliminó correctamente.', 200, respuesta);
      }
    } catch (error) {
      mensajeError(res, error.message, 400);
    }
  }
}
