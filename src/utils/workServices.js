const axios = require('axios');
const https = require('https');
const { mensajeError, mensajeExito } = require('./handleResponse');
const Debug = require('debug');
const debug = new Debug('llamada-axios')
module.exports = {
  callService: async (params, res) => {
    try {
      const response = await axios(params);
      if (response) {
        return response
      } else {
        return res.status(400).json('No existe respuesta')
      }
    } catch (error) {
      mensajeError(res, error.message)
    }
  },
  callRestService: async (params) => {
    let response, mensaje;
    try {
      debug(params);
      response = await axios(params);
      mensaje = `respuesta correcta desde ${params.url}`
    } catch (error) {
      mensaje = `${error} desde ${params.url}`;
      response = error.response;
      if (error.response === undefined || error.response === null) {
        response = { status: 404, statusText: 'recurso no disponible', mensaje: 'Recurso no se encuentra disponible' }
        mensaje = `error 404, el servicio no se encuentra disponible desde ${params.url}`;
      }
    }
    finally {
      debug(mensaje)
      return response;
    }

  }
}
