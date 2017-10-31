import Recipe from '../controllers/models/recipes';
// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// const mongoose = require('mongoose');
// const Book = require('../lib/controllers/models/book');

// Require the dev-dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../lib/server');

const should = chai.should();

chai.use(chaiHttp);
// Our parent block
describe('Recipes', () => {
  beforeEach((done) => { // Before each test we empty the database
    // Book.remove({}, (err) => {
    //    done();
    // });
    done();
  });
  /*
  * Test the /GET route
  */
  describe('/GET Recipes', () => {
    it('it should GET all the recipes', (done) => {
      chai.request(server)
        .get('/api/v1/recipe')
        .end((err, res) => {
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
  describe('/POST recipe', () => {
    it('it should POST a recipe', (done) => {
      const recipe = {
        id: 1,
        title: 'amala',
        decription: 'bla bla bla',
        upVote: 20,
        downVote: 3,
        userId: 100,
        imageUrl: 'image1.jpg',
        dateAdded: '12/2/2013',
      };
      chai.request(server)
        .post('/api/v1/recipe')
        .send(recipe)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  /*
  * Test the /POST route recipe
  */
  describe('/POST review', () => {
    it('it should POST a review', (done) => {
      const recipe = {
        id: 1,
        recipeId: 1,
        comment: 'bla bla bla',
        userId: 100,
        imageUrl: 'image1.jpg',
        dateAdded: '12/2/2013',
      };
      chai.request(server)
        .post('/api/v1/recipes/2/reviews')
        .send(recipe)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
