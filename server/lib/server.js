import express from 'express';
import bodyParser from 'body-Parser';
import RecipesController from './controllers/recipes';
import ReviewsController from './controllers/reviews';

const app = express();

const apiRouter = express.Router();

const rc = new RecipesController(apiRouter);
const rv = new ReviewsController(apiRouter);

// create application/json parser

const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// GET /api/v1/recipes gets all available recipes
app.get('/api/v1/recipes', (req, res) => {
  res.send(rc.getRecipes());
});

app.get('/api/v1/reviews', (req, res) => {
  res.send(rv.getReviews());
});

// GET /api/v1/recipes/:id gets a single recipe
app.get('/api/v1/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.send(rc.getSingleRecipe(id));
});

// GET /api/v1/:id/Reviews/ gets reviews of a single recipe
app.get('/api/v1/recipes/:id/Reviews/', (req, res) => {
  const id = parseInt(req.params.id);
  res.send(rv.getReviewsSingleRecipe(id));
});

// DELETE /api/v1/recipes/:id deletes a recipe from the resource
app.delete('/api/v1/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.send(rc.deleteSingleRecipe(id));
});

// POST /api/v1/recipes adds new recipe info to the resource
app.post('/api/v1/recipes', urlencodedParser, (req, res) => {
  const info = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    upVote: req.body.upVote,
    downVote: req.body.downVote,
    userId: req.body.userId,
    dateAdded: new Date(),
  };
  res.send(rc.postRecipe(info));
});

// POST /api/v1/recipes adds new review info to the resource
app.post('/api/v1/recipes/:id/reviews', urlencodedParser, (req, res) => {
  const info = {
    id: req.body.id,
    recipeId: req.body.recipeId,
    userId: req.body.userId,
    dateAdded: new Date(),
    comment: req.body.comment,
  };
  console.log(info);
  res.send(rv.postReview(info));
});


// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  res.send(`welcome, ${req.body.username}`);
});

// POST /api/users gets JSON bodies
app.post('/api/v1/users', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('More-recipe server listening on port 3000!');
});

export default { app };
