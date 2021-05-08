const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema.Types;
let schema = Schema({
  dias: { type: Number, required: true },
  costo: { type: Number, required: true },

});
const db = mongoose.model('tarifas', schema, 'tarifas');
module.exports = {
  db, schema
}
