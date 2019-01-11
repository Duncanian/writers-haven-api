const {
  sequelize,
  dataTypes,
  checkModelName,
} = require('sequelize-test-helpers');

const UserModel = require('./../user');

describe('src/models/user', () => {
  const Model = UserModel(sequelize, dataTypes);
  checkModelName(Model)('User');
});
