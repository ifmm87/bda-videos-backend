const debug = require('debug')('videos:fixtures');
const mongoose = require('mongoose');
const config = require('../config/app');
const path = require('path');
const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();

// Promesa para cargar los fixtures
function loadFixtures(xmongoUrl, fixtures_path) {
  return new Promise(async (resolve) => {
    const fixtures = await require('pow-mongodb-fixtures').connect(xmongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });
    await fixtures.load(path.join(__dirname, fixtures_path), (err) => {
      if (err) {
        console.log(err)
        throw 'Error al cargar fixtures';
      } else {
        resolve();
      }
    });
  });
}

// Funcion para borrar y crear la base de datos
async function cleanDatabase(xmongoUrl) {
  try {
    const conn = await mongoose.connect(xmongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });
    await conn.connection.db.dropDatabase();
    const allModels = await require('../src/models');
    debug('Cargando Modelos de Schema: \n%o', allModels);
  } catch (error) {
    debug('No se puede establecer conexion con la base de datos', error);
  }
}

// Funcion principal para cargar fixtures basado en la variable de entorno
// NODE_ENV en producion, development o test
async function start() {
  const node_env = process.env.NODE_ENV;
  try {
    if (node_env === 'production' || node_env === 'development') {
      const answer = await prompt([
        {
          type: 'confirm',
          name: 'setup',
          message: 'Este proceso destruira tu base de datos, usted esta seguro?'
        }
      ]);
      if (!answer.setup) {
        return console.log('Accion cancelada');
      }
    }
    if (node_env === 'production') {
      await cleanDatabase(config.mongoUrl);

      process.exit(0);
    }
    if (node_env === 'development') {
      await cleanDatabase(config.mongoUrlDev);
      await loadFixtures(config.mongoUrlDev, 'data_dev');
      process.exit(0);
    }
    if (node_env === 'test') {
      await cleanDatabase(config.mongoUrlTest);
      await loadFixtures(config.mongoUrlTest, 'data_dev');
    }
  } catch (error) {
    console.log('errrrrrrror');
    console.log(error);
  }
}
// El Proceso se esta ejecutando desde la terminal
if (!module.parent) {
  start();
}

module.exports = start;
