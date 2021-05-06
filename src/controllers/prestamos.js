const { Prestamos } = require('../models');
const { listar, crear, mostrar, actualizar } = require('../utils/dao');
const { mensajeError, mensajeExito } = require('../utils/handleResponse');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
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
  ranking: async (req, res) => {
    debug('ranking videos ');
    try {
      const respuesta = await Prestamos.db.aggregate([
        {
          $unwind: '$videos'
        },
        {
          $lookup: {
                    from: 'videos',
                    localField: 'videos',
                    foreignField: '_id',
                    as: 'videosDetalles'
          }
        },
        { $unwind: '$videosDetalles'},
        { $project: {
            '_id': '$_id',
            'fechaPrestamo': '$createAt',
            'videoTitulo': '$videosDetalles.titulo'
          }
        }, 
        { "$group": {
              "_id": "$videoTitulo",
              'cantidad': { $sum: 1 },
              "fechas": { "$push": "$fechaPrestamo" },
          }
        },
        { $sort : { 'cantidad' : -1 } },
      ]);

      mensajeExito(res, 'ranking recuperado correctamente', 200, respuesta);
    } catch (error) {
      mensajeError(res, error, 400)
    }
  },
  mostrar: async (req, res) => {
    try {
      const { idPrestamo } = req.params;
      const respuesta = await Prestamos.db.aggregate([
        {
          $match: { _id: ObjectId(idPrestamo) }
        },
        {
          $lookup: {
                    from: 'clientes',
                    localField: 'cliente',
                    foreignField: '_id',
                    as: 'cliente'
                  }
        },
        {
          $unwind: '$cliente'
        },
        {
          $project: {
            _id: 1,
            fechaDevolucion: 1,
            devuelto: 1,
            createAt: 1,
            diasPrestamo:1,
            importeTotal: 1,
            descuento: 1,
            cliente: '$cliente.nombreCompleto',
            celular: '$cliente.celular',
            fechaNacimiento: '$cliente.fechaNacimiento',
            videos: 1
          }
        },
        {
          $unwind: '$videos'
        },
        {
          $lookup: {
                    from: 'videos',
                    localField: 'videos',
                    foreignField: '_id',
                    as: 'videosDetalles'
          }
        },
        { $unwind: '$videosDetalles'},
        { $project: {
            '_id': '$_id',
            'fechaDevolucion': 1,
            'devuelto':1,
            'createAt': 1,
            'cliente': 1,
            'celular': 1,
            diasPrestamo:1,
            importeTotal: 1,
            descuento: 1,
            'fechaNacimiento': 1,
            'video.titulo': '$videosDetalles.titulo',
            'video.costoUnitario': '$videosDetalles.costoUnitario',
            'video.reparto': '$videosDetalles.reparto',
            'video.director': '$videosDetalles.director',
          }
        },
        { "$group": {
              "_id": "$_id",
              "cliente": { "$first": "$cliente" },
              "devuelto": { "$first": "$devuelto" },
              "fechaNacimiento": { "$first": "$fechaNacimiento" },
              "fechaDevolucion": { "$first": "$fechaDevolucion" },
              "celular": { "$first": "$celular" },
              "diasPrestamo": { "$first": "$diasPrestamo" },
              "importeTotal": { "$first": "$importeTotal" },
              "descuento": { "$first": "$descuento" },
              "fechaPrestamo": { "$first": "$createAt" },
              "videos": { "$push": "$video" }
          }}
      ]);
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
