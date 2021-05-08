const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema.Types;
let schema = Schema({
  motivo: { type: String, required: true },
  video: {type: ObjectId, ref: 'clientes'},
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  deleteAt: { type: Date, default: Date.now }
});
const db = mongoose.model('bajas', schema, 'bajas');
module.exports = {
  db, schema
}
