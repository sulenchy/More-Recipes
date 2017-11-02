'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _recipes = require('./controllers/recipes');

var _recipes2 = _interopRequireDefault(_recipes);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// var bodyParser = require('body-parser')
;

var app = (0, _express2.default)();

// create application/json parser

var jsonParser = _bodyParser2.default.json();

// create application/x-www-form-urlencoded parser

var urlencodedParser = _bodyParser2.default.urlencoded({ extended: false });

var apiRouter = _express2.default.Router();

// app.use('/api/v1', apiRouter);

app.use(_bodyParser2.default.json({ type: 'application/*+json' }));

// let PlayersController = require('./controllers/pls');


var rc = new _recipes2.default(apiRouter);

app.get('/api/recipes', function (req, res) {
  res.send(rc.getRecipes());
});

app.get('/api/recipes/:id', function (req, res) {
  var id = parseInt(req.params.id);
  res.send(rc.getSingleRecipe(id));
});

app.get('/api/recipes/:id/Reviews/', function (req, res) {
  var id = parseInt(req.params.id);
  res.send(rc.getReviewsSingleRecipe(id));
});

// app.post('/api/recipes', (req, res) => {
//   const info = {
//     id: 4,
//     title: 'Efo Riro',
//     description: 'Put oil bla bla bla',
//   };
//   console.log(info);
//   console.log(req.body.id);
//   res.send(rc.postRecipe(info));
// });

app.delete('/api/recipes/:id', function (req, res) {
  var id = parseInt(req.params.id);
  res.send(rc.deleteSingleRecipe(id));
});

app.put('/api/v1/recipes/:id', function (req, res) {
  var id = parseInt(req.params.id);
  res.send(rc.putRecipe(id));
});

// POST /api/users gets JSON bodies
app.post('/api/recipes', function (req, res) {
  if (!req.body) return res.sendStatus(400);
  return res.send(req.body);
  // create user in req.body
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//end of server.js