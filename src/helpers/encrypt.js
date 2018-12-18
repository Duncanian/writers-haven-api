const bcrypt = require('bcrypt');

class EncryptData {
  static generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
  }
}

module.exports = EncryptData;
