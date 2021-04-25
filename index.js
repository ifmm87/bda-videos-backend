const Debug = require('debug');
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/app');
const PORT = process.env.PORT || 1987;
const debug = new Debug('videos');
debug(config);
async function start() {
  try {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.connect(config.mongoUrl)
    }
    if (process.env.NODE_ENV === 'development') {
      await mongoose.connect(config.mongoUrlDev)
      mongoose.set('debug', true);
    }
    app.listen(PORT, () => {
      debug(`Servidor de aplicaciones corriendo en el puerto ${PORT}`);
      module.exports = app;
    });
  } catch (error) {
    debug('No se puede establecer conexion con la base de datos', error)
  }
}
if (!module.parent) {
  start();
}
module.exports = app
