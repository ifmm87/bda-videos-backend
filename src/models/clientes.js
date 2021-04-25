const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema.Types;
let schema = Schema({
  nombreCompleto: { type: String, required: true },
  nit: { type: String, required: false },
  celular: { type: Object, required: false },
  correo: { type: Object, required: false },
  fechaNacimiento: { type: Date, default: Date.now },
  direccion: { type: String, required: false },
  latitud: { type: String, required: true },
  longitud: { type: String, required: true },
  motivoBloqueo: { type: String, required: false },
  bloqueado: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  deleteAt: { type: Date, default: Date.now }
});
const db = mongoose.model('clientes', schema, 'clientes');
module.exports = {
  db, schema
}
