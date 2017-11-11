import usersController from '../controllers/users';
import recipesController from '../controllers/recipes';
import auth from '../middleware/authenticate';

const routes = (app) => {
  app.get('/api/v1/', (req, res) => res.status(200).send({
    status: 'Welcome message',
    message: 'Welcome to More Recipe API!',
  }));

  // API endpoints for users to create accounts or signup
  app.post('/api/v1/users/signup', usersController.create);

  // API endpoints for users to create accounts or signin
  app.post('/api/v1/users/signin', usersController.signIn);

  // An API route that allows authenticated user to add a recipe
  app.post('/api/v1/recipes', auth.verifyUser, recipesController.create);

  // An API route that allows authenticated user to modify a recipe they added
  app.put('/api/v1/recipes/:recipeId', auth.verifyUser, recipesController.update);

  // An API route that allows authenticated user to delete a recipe they added
  app.delete('/api/v1/recipes/:recipeId', auth.verifyUser, recipesController.destroy);

  // API endpoints to list recipes
  app.get('/api/v1/recipes', recipesController.list);

  // An API route that allows a user to get all the recipes in the application
  app.get('/api/v1/sort/recipes', recipesController.SortByUpvoteDesc);

  app.get('/me', usersController.listAll);
};

export default routes;
