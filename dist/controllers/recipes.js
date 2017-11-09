'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const TodoItem = require('../models').TodoItem;
var recipes = _models2.default.recipes;

var post = {
  create: function create(req, res) {
    return recipes.create({
      title: req.body.title,
      ingredients: req.body.ingredients,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      upvote: 0,
      downvote: 0,
      favorite: 0,
      userId: req.decoded.id
    }).then(function (recipe) {
      return res.status(200).send(recipe);
    }).catch(function (error) {
      return res.status(400).send(error.message);
    });
  },
  update: function update(req, res) {
    return recipes.findById(req.params.recipeId).then(function (varRecipes) {
      console.log(varRecipes);
      if (!varRecipes) {
        return res.status(404).send({
          message: 'Recipe Not Found'
        });
      }

      return varRecipes.update({
        title: req.body.title || varRecipes.title,
        ingredients: req.body.ingredients || varRecipes.ingredients,
        description: req.body.description || varRecipes.description,
        imageUrl: req.body.imageUrl || varRecipes.imageUrl
      }).then(function (updatedRecipe) {
        return res.status(200).send(updatedRecipe);
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  destroy: function destroy(req, res) {
    return recipes.findById(req.params.recipeId).then(function (varRecipes) {
      if (!varRecipes) {
        return res.status(404).send({
          message: 'Recipe Not Found'
        });
      }

      return varRecipes.destroy().then(function () {
        return res.status(204).send('Recipe with recipeId ' + varRecipes.id + ' has deleted');
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },


  // An API route that allows a user to get all the recipes in the application
  list: function list(req, res) {
    return recipes.all().then(function (recipesList) {
      return res.status(200).send(recipesList);
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  SortByUpvoteDesc: function SortByUpvoteDesc(req, res) {
    // return recipes
    //   .all()
    //   .then(recipesList => res.status(200).send(recipesList))
    //   .catch(error => res.status(400).send(error));

    // Query the DB and if no errors, send all the books
    if (req.query.sort === 'upvotes' && req.query.order === 'desc') {
      recipes.sort(function (recipe1, recipe2) {
        return recipe1.upVote - recipe2.upVote;
      });
    }
    return recipes;
  }
};

exports.default = post;