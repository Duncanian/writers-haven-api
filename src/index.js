const debug = require('debug');
const app = require('./app');
const config = require('./config/config');

const logger = debug('log');

const { port } = config;
app.listen(port, () => {
  logger(`Magic happening on port ${port}`);
});
