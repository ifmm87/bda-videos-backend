const id = require('pow-mongodb-fixtures').createObjectId;
exports.prestamos = {
  item1: {
    _id: id('000000000000000000000001'),
    "cliente":"000000000000000000000001",
    "videos": ["000000000000000000000001", "000000000000000000000002"],
    "fechaDevolucion": "2021-05-01",
    "diasPrestamo": 3,
    "descuento": 4,
    "importeTotal": 50,
    createAt : new Date(),
    updateAt : new Date(),
    deleted : false
  },
  item2: {
    _id: id('000000000000000000000002'),
    "cliente":"000000000000000000000001",
    "videos": ["000000000000000000000002", "000000000000000000000003"],
    "fechaDevolucion": "2021-05-01",
    "diasPrestamo": 3,
    "descuento": 4,
    "importeTotal": 50,
    createAt : new Date(),
    updateAt : new Date(),
    deleted : false
  },
  item3: {
    _id: id('000000000000000000000003'),
    "cliente":"000000000000000000000002",
    "videos": ["000000000000000000000001", "000000000000000000000002", "000000000000000000000003"],
    "fechaDevolucion": "2021-05-01",
    "diasPrestamo": 3,
    "descuento": 4,
    "importeTotal": 50,
    createAt : new Date(),
    updateAt : new Date(),
    deleted : false
  },
  item4: {
    _id: id('000000000000000000000004'),
    "cliente":"000000000000000000000002",
    "videos": ["000000000000000000000001", "000000000000000000000002"],
    "fechaDevolucion": "2021-05-01",
    "diasPrestamo": 3,
    "descuento": 4,
    "importeTotal": 50,
    createAt : new Date(),
    updateAt : new Date(),
    deleted : false
  },
}
