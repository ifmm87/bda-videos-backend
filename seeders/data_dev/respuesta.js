var id = require('pow-mongodb-fixtures').createObjectId;
exports.respuesta = {
  item1: {
    _id: id('000000000000000000000001'),
    idConfiguracion: '000000000000000000000001',
    respuesta:
    [ { campo: 'tipoPersona', valor: '1',correcto : true },
      { campo: 'numeroDocumento', valor:'5596788', correcto : true },
      { campo: 'primerApellido', valor: 'CARVALHO', correcto : true },
      { campo: 'fechaNacimiento', valor: '06/08/1995', correcto : true },
      { campo: 'nombres', valor: 'JORGE', correcto : true },
      { campo: 'segundoApellido', valor: 'MEJIA', correcto : true },
    ]
  }
 
}



