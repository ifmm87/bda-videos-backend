var id = require('pow-mongodb-fixtures').createObjectId
exports.parametro = {

  item1: {
    _id: id(),
    version: '1',
    tipo: 'parametro',
    contrastar:
    {
      method: 'GET',
      urlStatus: 'https://interoperabilidad.agetic.gob.bo/fake/segip/v2/status',
      url : 'https://interoperabilidad.agetic.gob.bo/fake/segip/v2/personas/contrastacion/',
      token : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlelB2WHJqcG5JbW9FUnRlNmU2S05YMjNqTGlrenJyYyIsInVzZXIiOiJpbXVqaWNhIiwiZXhwIjoxNTM1NDgwMTAwLCJpYXQiOjE1Mjc3MDQxMDB9.zoP6RBCXGRRCSMO7ER72bQV2QTBsyPl6otZ9WRKa3rU',
      campos:
      [ { campo: 'tipoPersona', obligatorio: true, valorObligatorio: true },
        { campo: 'numeroDocumento', obligatorio: true, valorObligatorio: true },
        { campo: 'primerApellido', obligatorio: true , valorObligatorio: true },
        { campo: 'fechaNacimiento', obligatorio: false, valorObligatorio: true },
        { campo: 'nombres', obligatorio: false, valorObligatorio: true },
        { campo: 'segundoApellido', obligatorio: false, valorObligatorio: false },
      ]
    },
    recuperar:
    {
      method: 'GET',
      urlStatus: 'https://interoperabilidad.agetic.gob.bo/fake/segip/v2/status',
      url : 'https://interoperabilidad.agetic.gob.bo/fake/segip/v2/personas/',
      token : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlelB2WHJqcG5JbW9FUnRlNmU2S05YMjNqTGlrenJyYyIsInVzZXIiOiJpbXVqaWNhIiwiZXhwIjoxNTM1NDgwMTAwLCJpYXQiOjE1Mjc3MDQxMDB9.zoP6RBCXGRRCSMO7ER72bQV2QTBsyPl6otZ9WRKa3rU',
      campos:
      [ { campo: 'tipoPersona', obligatorio: false, valorObligatorio: true  },
        { campo: 'numeroDocumento', obligatorio: true, valorObligatorio: true  },
        { campo: 'fechaNacimiento', obligatorio: true, valorObligatorio: true  },
        { campo: 'nombres', obligatorio: false, valorObligatorio: true  },
        { campo: 'primeroApellido', obligatorio: false, valorObligatorio: true  },
        { campo: 'segundoApellido', obligatorio: false, valorObligatorio: false },
      ]
    },
    campos:
      [ { campo: 'tipoPersona' },
        { campo: 'numeroDocumento' },
        { campo: 'fechaNacimiento'},
        { campo: 'nombres' },
        { campo: 'primeroApellido'},
        { campo: 'segundoApellido'},
      ],
    deleted: false
  }
}



