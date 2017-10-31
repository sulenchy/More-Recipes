import usersController from '../controllers/users';

// const todosController = require('../controllers').todos;

const routes = (app) => {
  app.get('/api/v1/users', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/v1/users', usersController.create);
};

export default routes;