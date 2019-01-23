const express = require('express');
const AuthController = require('./Auth');
const middlewares = require('../../middlewares');

const { AuthValidator } = middlewares;

const Router = express.Router();

Router.post(
  '/signup',
  AuthValidator.validateSignup,
  AuthController.RegisterUser,
);

Router.post(
  '/signin',
  AuthValidator.validateSignin,
  AuthController.LoginUser,
);

module.exports = Router;
