// const TodoItem = require('../models').TodoItem;
import model from '../models';
import jwt from 'jsonwebtoken';

const recipes = model.recipes;

const post = {
  create(req, res) {
    return recipes
      .create({
        title: req.body.title,
        ingredients: req.body.ingredients,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        upvote: 0,
        downvote: 0,
        favorite: 0,
        userId: req.params.userId,
      })
      .then(recipe => res.status(200).send(recipe))
      .catch(error => res.status(400).send(error.message));
  },

  update(req, res) {
    return recipes
      .find({
        where: {
          id: req.params.recipeId,
          userId: req.params.userId,
        },
      })
      .then((varRecipes) => {
        if (!varRecipes) {
          return res.status(404).send({
            message: 'Recipe Not Found',
          });
        }

        return varRecipes
          .update({
            title: req.body.title || varRecipes.title,
            ingredients: req.body.ingredients || varRecipes.ingredients,
            description: req.body.description || varRecipes.description,
            imageUrl: req.body.imageUrl || varRecipes.imageUrl,
          })
          .then(updatedRecipe => res.status(200).send(updatedRecipe))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return recipes
      .find({
        where: {
          id: req.params.recipeId,
          userId: req.params.userId,
        },
      })
      .then((varRecipes) => {
        if (!varRecipes) {
          return res.status(404).send({
            message: 'Recipe Not Found',
          });
        }

        return varRecipes
          .destroy()
          .then(() => res.status(204).send(`Recipe with recipeId ${varRecipes.id} has deleted`))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  // An API route that allows a user to get all the recipes in the application
  list(req, res) {
    return recipes
      .all()
      .then(recipesList => res.status(200).send(recipesList))
      .catch(error => res.status(400).send(error));
  },
  SortByUpvoteDesc(req, res) {
    // return recipes
    //   .all()
    //   .then(recipesList => res.status(200).send(recipesList))
    //   .catch(error => res.status(400).send(error));

    // Query the DB and if no errors, send all the books
    if (req.query.sort === 'upvotes' && req.query.order === 'desc') {
      recipes.sort((recipe1, recipe2) => recipe1.upVote - recipe2.upVote);
    }
    return recipes;
  },
};

export default post;
