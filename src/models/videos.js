const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema.Types;
let schema = Schema({
  duracion: { type: Number, required: false },
  genero: { type: String, required: true },
  titulo: { type: String, required: true },
  anioPublicacion: { type: Number, required: true },
  nominaciones: { type: Object, required: false },
  reparto: { type: Object, required: false },
  costoUnitario: { type: String, required: false },
  copias: { type: Number, required: true },
  deleted: { type: Boolean, default: false },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  deleteAt: { type: Date, default: Date.now }
});
const db = mongoose.model('videos', schema, 'videos');
module.exports = {
  db, schema
}
