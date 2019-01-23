const models = require('../../database/models');
const reqResponses = require('../../helpers/responses');
const encPass = require('../../helpers/encrypt');

class AuthController {
  static async RegisterUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const hashedPass = encPass.generateHash(password);
      const result = await models.User.create({
        username,
        email,
        password: hashedPass,
      });
      const message = [201, 'User created successfully', true];
      return reqResponses.response(res, message, result);
    } catch (error) {
      return reqResponses.handleError(error.toString(), 500, res);
    }
  }

  static LoginUser(req, res) {
    try {
      const message = [201, 'Login successful!', true];
      return res.status(message[0]).json({
        success: message[2],
        message: message[1],
      });
    } catch (error) {
      return reqResponses.handleError(error.toString(), 500, res);
    }
  }
}

module.exports = AuthController;
