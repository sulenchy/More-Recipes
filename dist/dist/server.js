'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _recipes = require('../lib/controllers/routes/recipes');

var _recipes2 = _interopRequireDefault(_recipes);

var _reviews = require('../lib/controllers/routes/reviews');

var _reviews2 = _interopRequireDefault(_reviews);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// we load the db location from the JSON files
var app = (0, _express2.default)(); // we load the db location from the JSON files

// don't show the log when it is test
if (_config2.default.util.getEnv('NODE_ENV') !== 'test') {
  // use morgan to log at command line
  app.use((0, _morgan2.default)('combined')); // 'combined' outputs the Apache style LOGs
}

// parse application/json and look for raw text
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.text());
app.use(_bodyParser2.default.json({ type: 'application/json' }));

app.get('/', function (req, res) {
  return res.json({ message: 'Welcome to More Recipes!' });
});

app.route('/api/v1/Recipe').get(_recipes2.default.getRecipes).post(_recipes2.default.postRecipe);
app.route('/api/v1/Recipe/:id').get(_recipes2.default.getRecipe).delete(_recipes2.default.deleteRecipe).put(_recipes2.default.updateRecipe);
app.route('/api/v1/recipes/:id/reviews').post(_reviews2.default.postReview);
app.route('/api/v1/reviews').get(_reviews2.default.getReviews);

app.listen(8080);
console.log('Listening on port ' + 8080);

exports.default = app; // for testing