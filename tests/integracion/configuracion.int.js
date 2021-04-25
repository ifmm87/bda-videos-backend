const test = require('ava');
const request = require('supertest');
const server = require('../../index');
const init = require('../../tools/init-mongo-test');
test('Parametros de configuracion activos', async t => {
  const respuesta = await request(server).get('/parametros');
  t.is(respuesta.status, 200);
  t.is(respuesta.body.datos.total, 1, 'NO Existe una configuración activa');
  t.truthy(respuesta.body.datos.listado.length, 'NO Existe una configuración activa');
  t.truthy(respuesta.body.datos.listado[0].recuperar, 'NO Existe configuracion de recuperar');
  t.truthy(respuesta.body.datos.listado[0].contrastar, 'NO Existe configuración de contrastar');
});
test('Servicio de SEGIP disponible', async t => {
  const respuesta = await request(server).get('/parametros/segip/status');
  t.is(respuesta.status, 200);
  t.is(respuesta.body.mensaje, 'El servicio de SEGIP se encuentra disponible');
});
test('POST Guardar configuracion RECUPERAR', async t => {
  const configuracion = {
    operacion: 'recuperar',
    entrada: ['numeroDocumento', 'fechaNacimiento'],
    salida: ['numeroDocumento', 'fechaNacimiento','primerApellido','segundoApellido','nombres'],
    obligatorio: ['numeroDocumento', 'fechaNacimiento','primerApellido','segundoApellido','nombres'],
    origen: 'BPM'
  }
  const respuesta = await request(server).post('/configuraciones')
                          .set('Accept', 'application/json')
                          .send(configuracion);
  t.truthy(respuesta);
  t.is(respuesta.status, 200);
});
test('POST Guardar configuracion CONTRASTAR', async t => {
  const configuracion = {
    operacion: 'contrastar',
    entrada: ['tipoPersona','numeroDocumento', 'fechaNacimiento','primerApellido','segundoApellido','nombres'],
    salida: ['numeroDocumento', 'fechaNacimiento','primerApellido','segundoApellido','nombres'],
    obligatorio: ['numeroDocumento', 'fechaNacimiento','primerApellido','segundoApellido','nombres'],
    origen: 'BPM'
  }
  const respuesta = await request(server).post('/configuraciones')
                          .set('Accept', 'application/json')
                          .send(configuracion);
  t.truthy(respuesta);
  t.is(respuesta.status, 200);
});

test('POST RESOLVER una configuración', async t => {
  const configuracion = [
    {campo: 'numeroDocumento', valor:'5596788-1E'},
    {campo: 'fechaNacimiento', valor:'06/08/1995'},
  ]
  const respuesta = await request(server).post('/configuraciones/resolver/000000000000000000000001')
                          .set('Accept', 'application/json')
                          .send(configuracion);
  t.truthy(respuesta);
  t.is(respuesta.status, 200);
});

test('Debe dar error en caso de enviar una respuesta contaminada', async t => {
  const respuesta = [
    {
          idRespuesta : "000000000000000000000001",
          tipoPersona : '1',
          numeroDocumento : '5596788',
          fechaNacimiento : '06/08/1995',
          primerApellido  : 'CARVALHO',
          segundoApellido : 'MEJIA',
          nombres  : 'JORGE3'
      }
  ]
  const respuestaRespuesta = await request(server).post('/respuestas')
                          .set('Accept', 'application/json')
                          .send(respuesta);
  t.truthy(respuestaRespuesta);
  t.is(respuestaRespuesta.status, 400);
});

test('No Debe dar error en caso de enviar una respuesta correcta', async t => {
  const respuesta = [
    {
          idRespuesta : "000000000000000000000001",
          tipoPersona : '1',
          numeroDocumento : '5596788',
          fechaNacimiento : '06/08/1995',
          primerApellido  : 'CARVALHO',
          segundoApellido : 'MEJIA',
          nombres  : 'JORGE'
      }
  ]
  const respuestaRespuesta = await request(server).post('/respuestas')
                          .set('Accept', 'application/json')
                          .send(respuesta);
  t.truthy(respuestaRespuesta);
  t.is(respuestaRespuesta.status, 200);
});