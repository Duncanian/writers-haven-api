const request = require('supertest');
const app = require('../app');

describe('Test routing', () => {
  it('Wrong route', (done) => {
    request(app)
      .get('/wrongUrl')
      .expect(404)
      .end((err, res) => {
        expect(res.body.message).toEqual('Oops, we lost you!.');
        if (err) return done();
        done();
      });
  });
});
