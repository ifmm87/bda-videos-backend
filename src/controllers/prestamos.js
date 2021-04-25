const https = require('https');
const { Prestamos } = require('../models');
const { listar, crear, mostrar, actualizar } = require('../utils/dao');
const { mensajeError, mensajeExito } = require('../utils/handleResponse');
const { validaObligatorio,
  validaEntrada,
  armaRecuperar,
  armaContrastar,
  resolverRespuestaRecuperar,
  resolverRespuestaContrastacion } = require('../middleware/validador');
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
  // mostrar: async (req, res) => {
  //   try {
  //     const { idConfiguracion } = req.params;
  //     const respuesta = await mostrar(Configuracion.db, { id: idConfiguracion });
  //     //const respuesta = await Configuracion.db.findOne({ _id: idConfiguracion });
  //     if (respuesta) {
  //       mensajeExito(res, 'Configuración recuperada correctamente', 200, respuesta);
  //     } else {
  //       throw new Error ('No se encontro ninguna configuración');
  //     }
  //   } catch (error) {
  //     mensajeError(res, error.message, 400);
  //   }
  // },
  // crear: async (req, res) => {
  //   try {
  //     const configuracion = req.body;
  //     let parametro = await Parametro.db.findOne({ tipo: 'parametro' });
  //     if (!parametro) {
  //       throw new Error('No se puede encontrar el parametro de configuración requerido.');
  //     }
  //     parametroMetodo = (configuracion.operacion === 'contrastar') ? parametro.contrastar : parametro.recuperar;
  //     let { valido, mensaje } = validaObligatorio(parametroMetodo, configuracion.entrada); // valida con la confifuracion solicitada
  //     if (!valido) {
  //       throw new Error('La configuración enviada no es valida para el método que desea interoperar.' + mensaje);
  //     }
  //     const respuesta = await crear(Configuracion.db, configuracion);
  //     if (respuesta) {
  //       mensajeExito(res, 'La configuración fue creada correctamente', 200, respuesta);
  //     } else {
  //       throw new Error('No se pudo guardar la configuración');
  //     }
  //   } catch (error) {
  //     mensajeError(res, error.message, 400);
  //   }
  // },
  // modificar: async (req, res) => {
  //   try {
  //     const { idDocumento, idConfiguracion } = req.params;
  //     const { config } = req.body;
  //     const respuesta = await actualizar(Configuracion.db, idConfiguracion, {})
  //     if (respuesta) {
  //       mensajeExito(res, 'La configuración fue actualizada correctamente', 200, respuesta);
  //     }
  //   } catch (error) {
  //     mensajeError(res, error.message);
  //   }
  // },
  // eliminar: async (req, res) => {
  //   try {
  //     const { idConfiguracion } = req.params;
  //     const respuesta = await eliminar(Configuracion.db, idConfiguracion);
  //     if (respuesta) {
  //       mensajeExito(res, 'La configuración se eliminó correctamente.', 200, respuesta);
  //     }
  //   } catch (error) {
  //     mensajeError(res, error.message, 400);
  //   }
  // },
  // resolver: async (req, res) => {
  //   try {
  //     console.log('===========el body de la peticion=================================');
  //     console.log(req.body);
  //     const { idConfiguracion } = req.params;
  //     const campos = req.body;
  //     let urlFinal = '';
  //     if (!Array.isArray(campos)) {
  //       throw new Error('Error, los datos enviados no conforman un array.');
  //     }
  //     let parametro = await Parametro.db.findOne({ tipo: 'parametro' });
  //     if (!parametro) {
  //       throw new Error('No se puede encontrar el parametro requerido.');
  //     }
  //     console.log('=========el parametro===================================');
  //     console.log(parametro);
  //     const configuracion = await mostrar(Configuracion.db, { id: idConfiguracion });
  //     console.log('=============la configuracion===============================');
  //     console.log(configuracion);
  //     parametroMetodo = (configuracion.operacion === 'contrastar') ? parametro.contrastar : parametro.recuperar;
      /**
       * Valida el cuerpo enviado con la configuración
       */
  //     console.log('=================parametro métodoooo===========================');
  //     console.log(parametroMetodo);
  //     let { valido, mensaje } = validaEntrada(campos, configuracion.entrada, parametroMetodo);
  //     if (!valido) {
  //       throw new Error (mensaje);
  //     }
  //     urlFinal += (configuracion.operacion === 'contrastar') ? armaContrastar(campos, configuracion.entrada) : armaRecuperar(campos, configuracion.entrada);
  //     debug(`Peticion a ${parametroMetodo.url + urlFinal}`);
  //     const peticion = {
  //       url: encodeURI(parametroMetodo.url + urlFinal),
  //       method: parametroMetodo.method,
  //       headers: {
  //         Authorization: `${parametroMetodo.token}`,
  //         'Content-Type': 'application/json'
  //       },
  //       httpsAgent: new https.Agent({ rejectUnauthorized : false }),
  //       json: true
  //     }
  //     console.log('==========peticion==================================');
  //     console.log(peticion);
  //     let respuestaServicio = await callRestService(peticion);
  //     console.log('================respuetaServiciooo============================');
  //     console.log(respuestaServicio);
  //     if (respuestaServicio.status === 404) {
  //       throw new Error('Recurso no disponible, la petición no se llegó a concretar.');
  //     }
  //     let respuesta = (configuracion.operacion === 'contrastar') ? resolverRespuestaContrastacion(respuestaServicio.data, configuracion.salida, campos) : resolverRespuestaRecuperar(respuestaServicio.data, configuracion.salida);
  //     if (respuesta.status === 200) {
  //       const respuestaGuardada = await crear(Respuesta.db, { configuracion: idConfiguracion, respuesta: respuesta.datos });
  //       debug(`Respuesta  almacenada correctamente`);
  //       mensajeExito(res, respuesta.mensaje, 200, {
  //         campos, configEntrada: configuracion.entrada,
  //         configSalida: configuracion.salida,
  //         idRespuesta: respuestaGuardada ? respuestaGuardada._id : null,
  //         respuesta: respuesta.datos
  //       });
  //     } else if (respuesta.status === 400) {
  //       return mensajeError(res, respuesta.mensaje, 400);
  //     }
  //   } catch (error) {
  //     mensajeError(res, error.message, 400);
  //   }
  // }
}
