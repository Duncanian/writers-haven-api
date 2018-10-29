const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const CORS = require('cors');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(CORS());
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(404).send({
  message: 'Oops, we lost you!.',
}));

module.exports = app;
