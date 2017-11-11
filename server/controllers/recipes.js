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
        userId: req.decoded.id,
      })
      .then(recipe => res.status(200).send({
        status:`Success`,
        message: `Recipe successfully added`,
        data: recipe,
      }))
      .catch(error => res.status(400).send({
        status: error.status,
        message: 'Recipe cannot be added',
      }));
  },

  update(req, res) {
    return recipes
      .findById(req.params.recipeId)
      .then((varRecipes) => {
        console.log(varRecipes);
        if (!varRecipes) {
          return res.status(400).send({
            status: `Recipe existence error`,
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
          .then(updatedRecipe => res.status(200).send({
            status:`Success`,
            message: `Recipe successfully added`,
            data: updatedRecipe,
          }))
          .catch(error => res.status(400).send({
            status: `Fail`,
            message: `Recipe cannot be updated`,
          }));
      })
      .catch(error => res.status(400).send({
        status: `Fail`,
        message: `Recipe cannot be updated`,
      }));
  },

  destroy(req, res) {
    return recipes
      .findById(req.params.recipeId)
      .then((varRecipes) => {
        if (!varRecipes) {
          return res.status(400).send({
            status: 'Fail',
            message: 'Error locating the specified recipe',
          });
        }

        return varRecipes
          .destroy()
          .then(() => res.status(204).send({
            status: `Success`,
            message: `Recipe with recipeId ${varRecipes.id} has deleted`,
          }))
          .catch(error => res.status(400).send({
            status: `Deletion failed`,
            message: `Recipe cannot be deleted`,
          }));
      })
      .catch(error => res.status(400).send({
        status: `deletion failed`,
        message: `Recipe cannot be deleted`,

      }));
  },

  // An API route that allows a user to get all the recipes in the application
  list(req, res) {
    return recipes
      .all()
      .then(recipesList => res.status(200).send({
        status: `Selection successful`,
        message: `All recipes selected successfully`,
        date: recipesList,
      }))
      .catch(error => res.status(400).send(error));
  },

  SortByUpvoteDesc(req, res) {
    if (req.query.sort === 'upvotes' && req.query.order === 'desc') {
      recipes.sort((recipe1, recipe2) => recipe1.upVote - recipe2.upVote);
    }
    return recipes;
  },
};

export default post;
