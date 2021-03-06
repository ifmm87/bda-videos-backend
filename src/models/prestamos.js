const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema.Types;
let schema = Schema({
  cliente: {type: ObjectId, ref: 'clientes'},
  videos: [
    { type: ObjectId, ref: 'videos'},
  ],
  fechaDevolucion: { type: Date, default: Date.now },
  diasPrestamo: { type: Number },
  costoUnitario: { type: Number },
  descuento: { type: Number },
  devuelto: { type: Boolean, required: true, default: false },
  importeTotal: { type: Number, default: 0 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  deleteAt: { type: Date, default: Date.now },
  deleted: false
});
const db = mongoose.model('prestamos', schema, 'prestamos');
module.exports = {
  db, schema
}
