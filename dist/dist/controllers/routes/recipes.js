'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recipes = require('../models/recipes');

var _recipes2 = _interopRequireDefault(_recipes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * GET /book route to retrieve all the books.
 */
function getRecipes(req, res) {
  // Query the DB and if no errors, send all the books
  if (req.query.sort === 'upvotes' && req.query.order === 'desc') {
    _recipes2.default.sort(function (recipe1, recipe2) {
      return recipe1.upVote - recipe2.upVote;
    });
  }
  console.log(_recipes2.default);
  res.json(_recipes2.default);
}

/*
 * POST /book to save a new book.
 */
function postRecipe(req, res) {
  var item = req.body;
  if (!item.id) {
    return res.sendStatus(500);
  }
  _recipes2.default.push(item);

  res.send('/Recipes/' + item.id);
}

/*
 * GET /book/:id route to retrieve a book given its id.
 */
function getRecipe(req, res) {
  var id = parseInt(req.params.id, 10);
  var result = _recipes2.default.filter(function (r) {
    return r.id === id;
  })[0];

  if (!result) {
    res.sendStatus(404);
  } else {
    res.send(result);
  }
}

/*
 * DELETE /book/:id to delete a book given its id.
 */
function deleteRecipe(req, res) {
  var id = parseInt(req.params.id, 10);
  var recipe = _recipes2.default.filter(function (p) {
    return p.id === id;
  })[0];
  res.json(_recipes2.default.splice(_recipes2.default.indexOf(recipe), 1));
}

/*
 * PUT /book/:id to updatea a book given its id
 */
function updateRecipe(req, res) {
  for (var i = 0; i < _recipes2.default.length; i += 1) {
    if (_recipes2.default[i].id === parseInt(req.params.id, 10)) {
      _recipes2.default[i].title = req.body.title;
      _recipes2.default[i].description = req.body.description;
      _recipes2.default[i].upVote = req.body.upVote;
      _recipes2.default[i].downVote = req.body.downVote;
      _recipes2.default[i].userId = req.body.userId;
      _recipes2.default[i].dateAdded = req.body.dateAdded;
      return res.json({
        Recipe: _recipes2.default,
        message: 'success',
        error: false
      });
    }
  }
  return res.status(404).json({
    message: 'recipe not found',
    error: true
  });
}

// export all the functions
exports.default = {
  getRecipes: getRecipes, postRecipe: postRecipe, getRecipe: getRecipe, deleteRecipe: deleteRecipe, updateRecipe: updateRecipe
};