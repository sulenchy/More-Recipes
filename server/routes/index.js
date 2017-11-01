import usersController from '../controllers/users';
import recipesController from '../controllers/recipes';

const routes = (app) => {
  app.get('/api/v1/', (req, res) => res.status(200).send({
    message: 'Welcome to More Recipe API!',
  }));

  // API endpoints for users to create accounts
  app.post('/api/v1/users/signup', usersController.create);
  // API endpoints to list recipes
  app.get('/api/v1/recipes', recipesController.list);
  // An API route that allows authenticated user to add a recipe
  app.post('/api/v1/recipes/:userId/recipes', recipesController.create);

  // Api route to allow users to sigin
  app.get('/api/v1/users/:userId', usersController.retrieve);
  app.put('/api/v1/users/:userId', usersController.update);
  app.delete('/api/v1/users/:userId', usersController.destroy);
  // An API route that allows authenticated user to modify a recipe they added
  app.put('/api/v1/users/:userId/recipes/:recipeId', recipesController.update);
  // An API route that allows authenticated user to delete a recipe they added
  app.delete('/api/v1/users/:userId/recipes/:recipeId', recipesController.destroy);
  // An API route that allows a user to get all the recipes in the application
  app.get('/api/v1/sort/recipes', recipesController.SortByUpvoteDesc);
};

export default routes;