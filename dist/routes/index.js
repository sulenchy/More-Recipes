'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('../controllers/users');

var _users2 = _interopRequireDefault(_users);

var _recipes = require('../controllers/recipes');

var _recipes2 = _interopRequireDefault(_recipes);

var _authenticate = require('../middleware/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes(app) {
  app.get('/api/v1/', function (req, res) {
    return res.status(200).send({
      message: 'Welcome to More Recipe API!'
    });
  });

  // API endpoints for users to create accounts or signup
  app.post('/api/v1/users/signup', _users2.default.create);

  // API endpoints for users to create accounts or signin
  app.post('/api/v1/users/signin', _users2.default.signIn);

  // An API route that allows authenticated user to add a recipe
  app.post('/api/v1/recipes', _authenticate2.default.verifyUser, _recipes2.default.create);

  // An API route that allows authenticated user to modify a recipe they added
  app.put('/api/v1/recipes/:recipeId', _authenticate2.default.verifyUser, _recipes2.default.update);

  // An API route that allows authenticated user to delete a recipe they added
  app.delete('/api/v1/recipes/:recipeId', _authenticate2.default.verifyUser, _recipes2.default.destroy);

  // API endpoints to list recipes
  app.get('/api/v1/recipes', _recipes2.default.list);

  // An API route that allows a user to get all the recipes in the application
  app.get('/api/v1/sort/recipes', _recipes2.default.SortByUpvoteDesc);

  app.get('/me', _users2.default.listAll);
};

exports.default = routes;