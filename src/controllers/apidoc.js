const { Parametro } = require('../models/');
const { mensajeExito, mensajeError } = require('../utils/handleResponse');
const { crear, eliminar, mostrar, actualizar, listar }= require('../utils/dao');
const api_doc = require('../../docs/api_doc');

module.exports =  {
    docs : async (req, res)=>{
    try{
        res.status(200).json(api_doc);
    } catch(error){
      mensajeError(res, error,400);
    }
  }

}