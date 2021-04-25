const id = require('pow-mongodb-fixtures').createObjectId;
exports.configuracion = {
  item1: {
    _id: id('000000000000000000000001'),
    entrada : [ 
      "numeroDocumento", 
      "fechaNacimiento"
    ],
    salida : [ 
      "numeroDocumento", 
      "fechaNacimiento", 
      "primerApellido", 
      "segundoApellido", 
      "nombres"
    ],
    obligatorio : [ 
      "numeroDocumento", 
      "fechaNacimiento", 
      "primerApellido", 
      "segundoApellido", 
      "nombres"
    ],
    createAt: new Date(),
    updateAt: new Date(),
    deleted: false,
    origen: 'BPM'
  },
  item2:{
    _id: id('000000000000000000000002'),
    createAt: new Date(),
    updateAt: new Date(),
    deleted: false,
    operacion: 'contrastar',
    entrada : [ 
      "tipoPersona", 
      "numeroDocumento", 
      "fechaNacimiento", 
      "primerApellido", 
      "segundoApellido", 
      "nombres"
    ],
    salida : [ 
      "numeroDocumento", 
      "fechaNacimiento", 
      "primerApellido",
      "segundoApellido",
      "nombres"
    ],
    obligatorio : [
      "numeroDocumento",
      "fechaNacimiento",
      "primerApellido",
      "segundoApellido",
      "nombres"
    ]
  }
}
