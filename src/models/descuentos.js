const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema.Types;
let schema = Schema({
  minimo: { type: Number, required: true },
  maximo: { type: Number, required: true },
  descuento: { type: Number, required: true },

});
const db = mongoose.model('descuentos', schema, 'descuentos');
module.exports = {
  db, schema
}
