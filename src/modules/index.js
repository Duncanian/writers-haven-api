const authRouter = require('./authentication');

const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, authRouter);
  return app;
};

module.exports = routes;
