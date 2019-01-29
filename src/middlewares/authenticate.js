const jwt = require('jsonwebtoken');
const reqResponses = require('../helpers/responses');

const setPublicKey = (env) => {
  switch (env) {
    case 'test':
      return process.env.JWT_PUBLIC_KEY;
    default:
      return Buffer.from(process.env.JWT_PUBLIC_KEY, 'base64');
  }
};

const authenticate = (req, res, next) => {
  const token = req.headers.authorization
    || req.body.token
    || req.query.token;

  if (!token) {
    const message = 'Please provide a token';
    return reqResponses.handleError(message, 401, res);
  }

  jwt.verify(
    token,
    setPublicKey(process.env.NODE_ENV),
    (error, decodedToken) => {
      if (error) {
        const message = 'Token is not valid';
        return reqResponses.handleError(message, 401, res);
      }
      req.user = decodedToken;
      return next();
    },
  );
};

module.exports = authenticate;
