const id = require('pow-mongodb-fixtures').createObjectId;
exports.videos = {
  item1: {
    _id: id('000000000000000000000001'),
    duracion: 230,
    genero: "TERROR",
    titulo: "Sleepy Hollow",
    anioPublicacion: "1998",
    reparto: [ "Jhonny Deep", "Cristina Picci"],
    costoUnitario: 123.78,
    copias: 2,
    createAt : new Date(),
    updateAt : new Date(),
    deleted : false
  },
  item2: {
    _id: id('000000000000000000000002'),
    duracion: 500,
    genero: "COMEDIA",
    titulo: "Sherk",
    anioPublicacion: "1998",
    reparto: [ "Sherk", "Cristina Picci"],
    costoUnitario: 123.78,
    copias: 2,
    createAt : new Date(),
    updateAt : new Date(),
    deleted : false
  },
  item3: {
    _id: id('000000000000000000000003'),
    duracion: 500,
    genero: "DRAMA",
    titulo: "No se aceptan devoluciones",
    anioPublicacion: "1998",
    reparto: [ "Eugenio Derbez"],
    costoUnitario: 123.78,
    copias: 2,
    createAt : new Date(),
    updateAt : new Date(),
    deleted : false
  },
  item4: {
    _id: id('000000000000000000000004'),
    duracion: 600,
    genero: "MORTAL KOMBAT",
    titulo: "ACCION",
    anioPublicacion: "1998",
    reparto: [ "El Japones"],
    costoUnitario: 123.78,
    copias: 2,
    createAt : new Date(),
    updateAt : new Date(),
    deleted : false
  }
}
