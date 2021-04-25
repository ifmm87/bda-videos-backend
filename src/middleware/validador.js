const Debug = require('debug');
const debug = new Debug('microservicio:validador');
const { crear, mostrar, actualizar } = require('../utils/dao');
const { Configuracion, Parametro } = require('../models');
const { mensajeError, mensajeExito } = require('../utils/handleResponse');

const recuperarCampo = (key, campos) => {
  let camposSeleccionados = campos.filter(campo => campo.campo === key);
  if (camposSeleccionados.length > 0) {
    return camposSeleccionados[0].valor;
  } else {
    return null;
  }
}
const verificaValorObligario = (key, campos) => {
  let camposSeleccionados = campos.filter(campo => campo.campo === key);
  if (camposSeleccionados.length > 0) {
    return camposSeleccionados[0].valorObligatorio;
  } else {
    return null;
  }
}
const validaObligatorio = (parametroMetodo, campos) => {
  let valido = true;
  let existeCampo = false;
  let mensajes = '';
  const camposObligatorios = parametroMetodo.campos.filter(campo => campo.obligatorio === true);
  camposObligatorios.map(campoObligatorio => {
    existeCampo = false;
    campos.map(campo => {
      if (campoObligatorio.campo === campo) {
        existeCampo = true;
      }
    });
    if (!existeCampo) {
      valido = false;
      mensajes += `Falta el campo ${campoObligatorio.campo}.`;
    }
  });
  return { valido, mensaje: mensajes };
}
const validaEntrada = (campos, camposConfig, parametroMetodo) => {
  let valido = true;
  let existeCampo = false;
  let mensajes = '';
  camposConfig.map(campoConfig => {
    existeCampo = false;
    campos.map(campo => {
      if (campoConfig === campo.campo) {
        existeCampo = true;
        if (verificaValorObligario(campo.campo, parametroMetodo.campos)) {
          if (campo.valor === '' || !campo.valor) {
            // fallo la validacion
            valido = false;
            mensajes += `Falta el valor del campo ${campoConfig}.`;
          }
        }
      }
    });
    if (!existeCampo) {
      valido = false;
      mensajes += `Falta el campo ${campoConfig}.`;
    }
  });
  return (valido) ? { valido, mensaje: 'Validado correctamente' } : { valido, mensaje: mensajes };
}
const armaContrastar = (camposEntrada, camposConfiguracion) => {
  let urlPrincipal = '';
  let urlQuery = '';
  let listaCampo = {};
  camposConfiguracion.map(campoConfig => {
    let valor = recuperarCampo(campoConfig, camposEntrada);
    switch (campoConfig) {
      case 'tipoPersona':
        urlQuery = `?tipo_persona=${valor}&`
        break;
      case 'numeroDocumento':
        listaCampo.NumeroDocumento = valor;
        if (valor.indexOf('-') !== -1) {
          let partesDocumento = valor.split('-');
          listaCampo.Complemento = partesDocumento[1];
          listaCampo.NumeroDocumento = partesDocumento[0];
        } else {
          listaCampo.NumeroDocumento = valor;
        }
        break;
      case 'fechaNacimiento':
        listaCampo.FechaNacimiento = valor;
        break;
      case 'nombres':
        listaCampo.Nombres = valor;
        break;
      case 'primerApellido':
        listaCampo.PrimerApellido = valor;
        break;
      case 'segundoApellido':
        listaCampo.SegundoApellido = valor
        break;
    }
  });
  return urlPrincipal + urlQuery + 'lista_campo=' + JSON.stringify(listaCampo);
}
const armaRecuperar = (camposEntrada, camposConfiguracion) => {
  let urlPrincipal = '';
  let urlQuery = '';
  camposConfiguracion.map(campoConfig => {
    let valor = recuperarCampo(campoConfig, camposEntrada);
    switch (campoConfig) {
      case 'numeroDocumento':
        if (valor.indexOf('-') !== -1) {
          let partesDocumento = valor.split('-');
          urlQuery += (urlQuery === '') ? `complemento=${partesDocumento[1]}` : `&complemento=${partesDocumento[1]}`;
          urlPrincipal += partesDocumento[0] + '?';
        } else {
          urlPrincipal += valor + '?';
        }
        break;
      case 'fechaNacimiento':
        urlQuery += (urlQuery === '') ? `fecha_nacimiento=${valor}` : `&fecha_nacimiento=${valor}`;
        break;
      case 'nombres':
        urlQuery += (urlQuery === '') ? `nombre=${valor}` : `&nombre=${valor}`;
        break;
      case 'primerApellido':
        urlQuery += (urlQuery === '') ? `primer_apellido=${valor}` : `&primer_apellido=${valor}`;
        break;
      case 'segundoApellido':
        urlQuery += (urlQuery === '') ? `segundo_apellido=${valor}` : `&segundo_apellido=${valor}`;
        break;
    }
  });
  return urlPrincipal + urlQuery;
}
const resolverRespuestaRecuperar = (respuesta, camposSalidaConfig) => {
  let respuestaMensaje;
  let respuestaJson;
  let status;
  let recuperoRegistro = false;
  let respuestaFormateada = [];
  let respuestaFinal = [];
  if (respuesta && respuesta.ConsultaDatoPersonaEnJsonResult && respuesta.ConsultaDatoPersonaEnJsonResult.CodigoRespuesta) {
    switch (respuesta.ConsultaDatoPersonaEnJsonResult.CodigoRespuesta) {
      case '1':
        status = 400;
        respuestaMensaje = 'No se encontró ningun registro.';
        break;
      case '2':
        status = 200;
        respuestaJson = JSON.parse(respuesta.ConsultaDatoPersonaEnJsonResult.DatosPersonaEnFormatoJson);
        recuperoRegistro = true;
        respuestaMensaje = 'Registro encontrado.';
        break;
      case '3':
        status = 400;
        respuestaMensaje = 'El número de documento de identidad está observado, intente ingresando el complemento separado por el caracter "-" en medio.';
        break;
      case '4':
        status = 400;
        respuestaMensaje = 'El número de documento de identidad está observado, debe apersonarse a oficinas de SEGIP para regularizar su situación.';
        break;
      default:
        status = 500,
        respuestaMensaje = 'Error.';
        break;
    }
  }
  if (recuperoRegistro) {
    respuestaFormateada.push({ campo: 'numeroDocumento', valor: respuestaJson.NumeroDocumento, correcto: true });
    respuestaFormateada.push({ campo: 'nombres', valor: respuestaJson.Nombres, correcto: true });
    respuestaFormateada.push({ campo: 'primerApellido', valor: respuestaJson.PrimerApellido, correcto: true });
    respuestaFormateada.push({ campo: 'segundoApellido', valor: respuestaJson.SegundoApellido, correcto: true });
    respuestaFormateada.push({ campo: 'fechaNacimiento', valor: respuestaJson.FechaNacimiento, correcto: true });
    camposSalidaConfig.map(campoConfig => {
      respuestaFormateada.map(campoF => {
        if (campoF.campo === campoConfig) {
          respuestaFinal.push(campoF)
        }
      });
    });
    return { status, mensaje: respuestaMensaje, datos: respuestaFinal }
  } else {
    return { status, mensaje: respuestaMensaje, datos: null };
  }
}
const resolverRespuestaContrastacion = (respuesta, camposSalidaConfig, campos) => {
  let respuestaMensaje;
  let status;
  let respuestaJson;
  let recuperoRegistro = false;
  let respuestaFormateada = [];
  let respuestaFinal = [];
  if (respuesta && respuesta.ConsultaDatoPersonaContrastacionResult && respuesta.ConsultaDatoPersonaContrastacionResult.CodigoRespuesta) {
    switch (respuesta.ConsultaDatoPersonaContrastacionResult.CodigoRespuesta) {
      case '1':
        status = 400;
        respuestaMensaje = 'No se encontró ningun registro';
        break;
      case '2':
        respuestaJson = JSON.parse(respuesta.ConsultaDatoPersonaContrastacionResult.ContrastacionEnFormatoJson);
        status = 200;
        recuperoRegistro = true;
        respuestaMensaje = 'Registro encontrado.';
        break;
      case '3':
        status = 400;
        respuestaMensaje = 'El número de documento de identidad está observado, intente ingresando el complemento separado por el caracter "-" en medio.';
        break;
      case '4':
        status = 400;
        respuestaMensaje = 'El número de documento de identidad está observado, debe apersonarse a oficinas de SEGIP para regularizar su situación.';
        break;
      default:
        status = 500;
        respuestaMensaje = 'Error';
        break;
    }
  }
  if (recuperoRegistro) {
    respuestaFormateada.push({ campo: 'numeroDocumento',correcto:(respuestaJson.NumeroDocumento === 1) ? true : false, valor: (respuestaJson.NumeroDocumento === 1) ? recuperarCampo('numeroDocumento', campos) : '' });
    respuestaFormateada.push({ campo: 'nombres', correcto:(respuestaJson.Nombres === 1) ? true : false, valor: (respuestaJson.Nombres === 1) ? recuperarCampo('nombres', campos) : '' });
    respuestaFormateada.push({ campo: 'primerApellido', correcto:(respuestaJson.PrimerApellido === 1) ? true : false, valor: (respuestaJson.PrimerApellido === 1) ? recuperarCampo('primerApellido', campos) : '' });
    respuestaFormateada.push({ campo: 'segundoApellido', correcto:(respuestaJson.SegundoApellido === 1) ? true : false, valor: (respuestaJson.SegundoApellido === 1) ? recuperarCampo('segundoApellido', campos) : '' });
    respuestaFormateada.push({ campo: 'fechaNacimiento', correcto:(respuestaJson.FechaNacimiento === 1) ? true : false, valor: (respuestaJson.FechaNacimiento === 1) ? recuperarCampo('fechaNacimiento', campos) : '' });
    camposSalidaConfig.map(campoConfig => {
      respuestaFormateada.map(campoF => {
        if (campoF.campo === campoConfig) {
          respuestaFinal.push(campoF)
        }
      });
    });
  } else {
    return { status: 400, mensaje: respuestaMensaje, datos: null };
  }
  debug(respuestaFinal);
  return { status, mensaje: respuestaMensaje, datos: respuestaFinal }
}
const validaRespuesta = (arrayGuardado, persona, arrayObligatorio) => {
  let valido = true;
  let existeCampo = false;
  let mensajes = '';
  // aqui validar los obligatorios
  arrayGuardado.map(item1 => {
    existeCampo = false;
    if (typeof persona ==='object' && persona.hasOwnProperty(item1.campo)) {
      existeCampo = true;
      if (item1.valor !== persona[item1.campo]) {
        valido = false;
        mensajes += `Falló la verificación del campo ${ item1.campo }.`;
      } else if (!item1.correcto) {
        valido = false;
        mensajes += `Falló la verificación del campo ${ item1.campo }.`;
      }
    } else {
      existeCampo = false;
    }
    if (!existeCampo) {
      valido = false;
      mensajes += `Falta el campo ${item1.campo}.`;
    }
  });
  return (valido) ? { valido, mensaje: 'Validado correctamente' } : { valido, mensaje: mensajes };
}
module.exports = {
  validaObligatorio,
  validaEntrada,
  armaContrastar,
  armaRecuperar,
  resolverRespuestaContrastacion,
  resolverRespuestaRecuperar,
  validaRespuesta
}
