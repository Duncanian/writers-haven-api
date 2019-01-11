const models = require('../../database/models');
const reqResponses = require('../../helpers/responses');
const encPass = require('../../helpers/encrypt');

class SignUpController {
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
}

module.exports = SignUpController;
