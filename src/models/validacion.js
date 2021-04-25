const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema.Types;
let schema = Schema({
  configuracion: {type: ObjectId, ref: ''},
  peticion: { type: Object, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  deleteAt: { type: Date, default: Date.now },
  deleted: false
});
const db = mongoose.model('peticion', schema, 'peticion');
module.exports = {
  db, schema
}
