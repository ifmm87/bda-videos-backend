const Debug = require('debug')

const debug = new Debug('bpm:DAO')
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types


module.exports = {
  listar: async(modelo, parametros, filter={}, outAttr={}, relacion={}) => {
    try {
      let listado = {}
      let copiaParametros = JSON.parse(JSON.stringify(parametros))
      let order = ''
      let camposSeleccionados = {}
      if(parametros.campos){
        const campos = parametros.campos.split(',')
        for (var i = 0 ; i < campos.length ; i++) {
          camposSeleccionados[campos[i]] = 1
        }
      }
      if (parametros.order) {
        order = parametros.order
        delete parametros.order
      }
      delete copiaParametros.limit
      delete copiaParametros.page
      delete copiaParametros.order
      delete copiaParametros.campos
      delete parametros.campos
      Object.keys(copiaParametros).forEach(campo => {
        if (/^[A-z0-9\s]/ig.test(copiaParametros[campo])) {
          copiaParametros[campo] = new RegExp(copiaParametros[campo], "ig")
        }
      });
      filter = Object.assign(filter, copiaParametros)
      listado = modelo.find(filter, camposSeleccionados)
      if (parametros.page && parametros.limit) {
        listado = listado.skip(parseInt((parametros.page - 1) * parametros.limit))
          .limit(parseInt(parametros.limit))
      }
      if (Object.keys(relacion).length > 0) {
        listado = listado.populate(relacion)
      }
      if (order != '') {
        listado = listado.sort(order)
      }
      listado = await listado
      const total = await modelo.find(filter).count()
      return {total, listado}
    } catch (error) {
      throw error
    }
  },
  mostrar: async(modelo, parametros, filter={}, outAttr={}, relacion={}) => {
    try {
      if (!filter._id) {
        filter._id = parametros.id
      }
      let item = modelo.findOne(filter, outAttr)
      if (Object.keys(relacion).length > 0) {
        item = item.populate(relacion)
      }
      item = await item
      if (item) {
        return item
      } else {
        throw new Error('No existe el registro solicitado.')
      }
    } catch (error) {
      throw error
    }
  },
  crear: async(modelo, parametros) => {
    try {
      const item = await modelo.create(parametros)
      return item
    } catch (error) {
      throw error
    }
  },
  eliminar: async(modelo, id, filter={}, idUsuario, dependientes={modelos:[]}) => {
    try {
      if (!filter._id) {
        filter._id = id
      }
      let existe = await modelo.findOne(filter)
      if (existe) {
        const borrado = {
          deleted: true,
          deleteAt: Date.now(),
          userDeleted: idUsuario
        }
        modelo.where({_id: id}).update(borrado).exec(async (err, result) => {
          for (let dependiente of dependientes.modelos) {
            let where = {}
            if ( Object.keys(dependientes.singleWhere).length > 0) {
              for(single of dependientes.singleWhere) {
                if (dependiente.modelName == single.modelo.modelName){
                  Object.assign(where, dependientes.globalWhere, single.where)
                } else {
                  Object.assign(where, dependientes.globalWhere)
                }
              }
              await dependiente.where(where).updateMany(borrado).exec()
            }
          }
        })
      } else {
        throw new Error('No existe el registro solicitado.')
      }
    } catch (error) {
      throw error
    }
  },
  actualizar: async(modelo, id, parametros, filter={}) => {
    try {
      if (!filter._id) {
        filter._id = id
      }
      const existe = await modelo.findOne(filter)
      if (existe) {
        delete parametros._id
        const item = await modelo.where(filter).update({$set: parametros})
        if (item.nModified == 0 && item.n == 0) {
          throw new Error('No Tiene permisos de modificar el registro.')
        } else {
          return item
        }
      } else {
        throw new Error('No existe el registro solicitado.')
      }
    } catch (error) {
      throw error
    }
  },
  activar: async (modelo, id, estado, filter={}) => {
    try {
      if (!filter._id) {
        filter._id = id
      }
      const existe = await modelo.find(filter)
      if (existe) {
        const item = await modelo.where(filter).update({$set: {activo: estado}})
        if (item.nModified == 0 && item.n == 0) {
          throw 'No Tiene permisos de modificar el registro.'
        } else {
          return item
        }
      } else {
        throw 'No existe el registro solicitado.'
      }
    } catch (error) {
      throw error
    }
  },
  publicar: async (modelo, id, filter={}) => {
    try {
      if (!filter._id) {
        filter._id = id
      }
      const existe = await modelo.find(filter)
      if (existe) {
        const item = await modelo.where(filter).update({$set: {publicado: true}})
        if (item.nModified == 0 && item.n == 0) {
          throw 'No Tiene permisos de modificar el registro.'
        } else {
          return item
        }
      } else {
        throw 'No existe el registro solicitado.'
      }
    } catch (error) {
      throw error
    }
  },
  duplicar: async(modelo, parametros, filter={}) => {
    try {
      if (!filter._id) {
        filter._id = parametros.id
      }
      let item = await modelo.findOne(filter)
      if (item) {
        //return item
      } else {
        throw new Error('No existe el registro solicitado.')
      }
    } catch (error) {
      throw error
    }
  },
  generarId: async () => {
    const nuevaId = ObjectId()
    return nuevaId
  },
  actualizarVersionando: async(modelo, id, res) => {
    try {
      const existe = await modelo.findById(id)
      if (existe) {
        // Eliminar el id del objeto para que no duplique el mismo objeto
        nuevo = existe
        if ('_id' in nuevo) {
          nuevo._id = ObjectId()
          nuevo.isNew = true
        }
        // Si existe una version en la estructura del objeto volverlo 0
        if ('version' in nuevo) {
          nuevo.version = 0
        }
        const item = await modelo.create(nuevo)
        res.status(201).json(item)
      } else {
        res.status(400).json('El documento no existe')
      }
    } catch (error) {
      debug(error)
      mensajeError(res, error.message)
    }
  },
  duplicar1: async(modelo, id, res) => {
    try {
      const existe = await modelo.findById(id)
      if (existe) {
        // Eliminar el id del objeto para que no duplique el mismo objeto
        nuevo = existe
        if ('_id' in nuevo) {
          nuevo._id = ObjectId()
          nuevo.isNew = true
        }
        // Si existe una version en la estructura del objeto volverlo 0
        if ('version' in nuevo) {
          nuevo.version = 0
        }
        const item = await modelo.create(nuevo)
        res.status(201).json(item)
      } else {
        res.status(400).json('El documento no existe')
      }
    } catch (error) {
      debug(error)
      mensajeError(res, error.message)
    }
  },
  
}
