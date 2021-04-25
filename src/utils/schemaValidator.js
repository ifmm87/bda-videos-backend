const Ajv = require('ajv');
const traductorAjv = require('ajv-i18n');
var ajv = Ajv({ allErrors: true });
module.exports = {
  validate: (schema, datos) => {
    const validate = ajv.compile(schema);
    const valid = validate(datos);
    if (!valid) {
      traductorAjv.es(validate.errors);
      throw {
              mensajeError: (ajv.errorsText(validate.errors, '')).replace(/data/g,schema.title),
              status: 400
            }
    }
    else {
      return true;
    }
  }
}
