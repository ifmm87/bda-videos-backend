'use strict'

const test = require('ava')
const mongoose = require('mongoose')
const fixtures = require('../seeders')

// ensure the NODE_ENV is set to 'test'
process.env.NODE_ENV = 'test';

test.before(async t => {
  // Reiniciar la base de datos y cargando los fixtures
  await fixtures()
})

test.after.always(async () => {
  mongoose.disconnect()
})
