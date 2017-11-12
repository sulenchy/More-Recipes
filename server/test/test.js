
import chai from 'chai';
import request from 'supertest';
import app from '../app';
import { Users, Recipes } from '../models';

const assert = chai.assert;

describe('More recipes Api endpoint Test', () => {
  beforeEach((done) => { // Before each test we empty the database
    Users.remove({}, (err) => {
      done();
    });
    Recipes.remove({}, (err) => {
      done();
    });
  });
});
describe('GET "/api/v1/home", to test server ', () => {
  it('should respond with a 200 status code, status, and message', (done) => {
    request(app)
      .get('/*')
      .end((err, res) => {
        assert.deepEqual(res.body.status, 'Success');
        assert.deepEqual(res.body.message, 'Welcome to the beginning of nothingness. Check the docs to know the appropiate route');
        assert.deepEqual(res.status, 200);
        done();
      });
  });
});
