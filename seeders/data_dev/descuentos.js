const ObjectId = require('pow-mongodb-fixtures').createObjectId;
exports.descuentos = {
1: {
	"_id" : ObjectId("000000000000000000000001"),
	"minimo" : 3,
	"maximo" : 5,
	"descuento" : 5,
  },
2:{
	"_id" : ObjectId("000000000000000000000002"),
	"minimo" : 6,
	"maximo" : 100,
	"descuento" : 10,
  },
}
