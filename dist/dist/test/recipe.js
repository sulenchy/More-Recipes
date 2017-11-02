'use strict';

var _recipes = require('../controllers/models/recipes');

var _recipes2 = _interopRequireDefault(_recipes);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// const mongoose = require('mongoose');
// const Book = require('../lib/controllers/models/book');

// Require the dev-dependencies


// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../lib/server');

var should = _chai2.default.should();

_chai2.default.use(_chaiHttp2.default);
// Our parent block
describe('Recipes', function () {
  beforeEach(function (done) {
    // Before each test we empty the database
    // Book.remove({}, (err) => {
    //    done();
    // });
    done();
  });
  /*
  * Test the /GET route
  */
  describe('/GET Recipes', function () {
    it('it should GET all the recipes', function (done) {
      _chai2.default.request(_server2.default).get('/api/v1/recipe').end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(3);
        done();
      });
    });
  });
  /*
  * Test the /POST route recipe
  */
  describe('/POST recipe', function () {
    it('it should POST a recipe', function (done) {
      var recipe = {
        id: 1,
        title: 'amala',
        decription: 'bla bla bla',
        upVote: 20,
        downVote: 3,
        userId: 100,
        imageUrl: 'image1.jpg',
        dateAdded: '12/2/2013'
      };
      _chai2.default.request(_server2.default).post('/api/v1/recipe').send(recipe).end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });

  /*
  * Test the /POST route recipe
  */
  describe('/POST review', function () {
    it('it should POST a review', function (done) {
      var recipe = {
        id: 1,
        recipeId: 1,
        comment: 'bla bla bla',
        userId: 100,
        imageUrl: 'image1.jpg',
        dateAdded: '12/2/2013'
      };
      _chai2.default.request(_server2.default).post('/api/v1/recipes/2/reviews').send(recipe).end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
});