import Recipe from '../models/recipes';

/*
 * GET /book route to retrieve all the books.
 */
function getRecipes(req, res) {
  // Query the DB and if no errors, send all the books
  if (req.query.sort === 'upvotes' && req.query.order === 'desc') {
    Recipe.sort((recipe1, recipe2) => recipe1.upVote - recipe2.upVote);
  }
  console.log(Recipe);
  res.json(Recipe);
}

/*
 * POST /book to save a new book.
 */
function postRecipe(req, res) {
  const item = req.body;
  if (!item.id) {
    return res.sendStatus(500);
  }
  Recipe.push(item);

  res.send(`/Recipes/${item.id}`);
}

/*
 * GET /book/:id route to retrieve a book given its id.
 */
function getRecipe(req, res) {
  const id = parseInt(req.params.id, 10);
  const result = Recipe.filter(r => r.id === id)[0];

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
  const id = parseInt(req.params.id, 10);
  const recipe = Recipe.filter(p => p.id === id)[0];
  res.json(Recipe.splice(Recipe.indexOf(recipe), 1));
}

/*
 * PUT /book/:id to updatea a book given its id
 */
function updateRecipe(req, res) {
  for (let i = 0; i < Recipe.length; i += 1) {
    if (Recipe[i].id === parseInt(req.params.id, 10)) {
      Recipe[i].title = req.body.title;
      Recipe[i].description = req.body.description;
      Recipe[i].upVote = req.body.upVote;
      Recipe[i].downVote = req.body.downVote;
      Recipe[i].userId = req.body.userId;
      Recipe[i].dateAdded = req.body.dateAdded;
      return res.json({
        Recipe,
        message: 'success',
        error: false,
      });
    }
  }
  return res.status(404).json({
    message: 'recipe not found',
    error: true,
  });
}

// export all the functions
export default {
  getRecipes, postRecipe, getRecipe, deleteRecipe, updateRecipe,
};
