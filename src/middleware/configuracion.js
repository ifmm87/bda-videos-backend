const ajv = require('ajv');
const schemaValidator = require('../utils/schemaValidator');

const Configuracion = {
  title: 'Configuracion',
  type: 'object',
  additionalProperties: false,
  required: ['operacion', 'entrada', 'salida', 'origen', 'obligatorio'],
  properties: {
    operacion: {
      type: 'string',
    },
    entrada: {
      type: 'array',
    },
    salida: {
      type: 'array'
    },
    origen: {
      type: 'string',
    },
    obligatorio: {
      type: 'array'
    }
  },
};
const Resolver = {
  title: 'Resolver',
  type: 'array',
  additionalProperties: false
};
const validaConfiguracion = (req, res, next) => {
  try {
    let resultado = schemaValidator.validate(Configuracion, req.body);
    if (resultado) {
      next();
    }
  }
  catch (error) {
    res.status(400).json({ mensaje: error.mensajeError, status: error.status });
  }
}
const validaResolver = (req, res, next) => {
  try {
    let resultado = schemaValidator.validate(Resolver, req.body);
    if (resultado) {
      next();
    }
  } catch (error) {
    res.status(400).json({mensaje: error.mensajeError, status: error.status})
  }
}
module.exports = {
  validaConfiguracion,
  validaResolver
}