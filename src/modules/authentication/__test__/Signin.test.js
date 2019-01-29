const request = require('supertest');
const app = require('../../../app');
const {
  userExist, userLogin,
} = require('./mocks/mockData');
const models = require('../../../database/models');

describe('Test login functionality', () => {
  beforeAll(async () => {
    await models.User.destroy({ force: true, truncate: { cascade: true } });
    await models.User.bulkCreate(userExist);
  });
  afterAll(async () => {
    await models.User.destroy({ force: true, truncate: { cascade: true } });
  });

  it('Should handle non-existent user', (done) => {
    request(app)
      .post('/api/v1/signin')
      .set('Content-Type', 'application/json')
      .send(userLogin.user1)
      .expect(400)
      .end((err, res) => {
        expect(res.body.success).toEqual(false);
        expect(res.body.error).toEqual('Sorry, you don\'t have an account. Kindly sign up');
        if (err) return done();
        done();
      });
  });

  it('Should handle wrong user password', (done) => {
    request(app)
      .post('/api/v1/signin')
      .set('Content-Type', 'application/json')
      .send(userLogin.user2)
      .expect(400)
      .end((err, res) => {
        expect(res.body.success).toEqual(false);
        expect(res.body.error).toEqual('Sorry, incorrect password!');
        if (err) return done();
        done();
      });
  });

  it('Should handle missing fileds', (done) => {
    request(app)
      .post('/api/v1/signin')
      .set('Content-Type', 'application/json')
      .send(userLogin.user3)
      .expect(400)
      .end((err, res) => {
        expect(res.body.success).toEqual(false);
        expect(res.body.error).toEqual('Kindly enter both email and password fields');
        if (err) return done();
        done();
      });
  });

  it('Should handle correct login', (done) => {
    request(app)
      .post('/api/v1/signin')
      .set('Content-Type', 'application/json')
      .send(userLogin.user)
      .expect(201)
      .end((err, res) => {
        expect(res.body.success).toEqual(true);
        expect(res.body.message).toEqual('Login successful!');
        if (err) return done();
        done();
      });
  });

  it('Should check for internal server error', (done) => {
    request(app)
      .post('/api/v1/signin')
      .set('Content-Type', 'application/json')
      .expect(500)
      .end((err, res) => {
        expect(res.body.success).toEqual(false);
        if (err) return done();
        done();
      });
  });
});
