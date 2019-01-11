const express = require('express');
const SignUpController = require('./Signup');
const middlewares = require('../../middlewares');

const { signupValidator } = middlewares;

const Router = express.Router();

Router.post(
  '/signup',
  signupValidator.validateSignup,
  SignUpController.RegisterUser,
);

module.exports = Router;
