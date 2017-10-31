import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import recipe from '../lib/controllers/routes/recipes';
import review from '../lib/controllers/routes/reviews';
import config from 'config';


// we load the db location from the JSON files
const app = express(); // we load the db location from the JSON files

// don't show the log when it is test
if (config.util.getEnv('NODE_ENV') !== 'test') {
  // use morgan to log at command line
  app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

// parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', (req, res) => res.json({ message: 'Welcome to More Recipes!' }));

app.route('/api/v1/Recipe')
  .get(recipe.getRecipes)
  .post(recipe.postRecipe);
app.route('/api/v1/Recipe/:id')
  .get(recipe.getRecipe)
  .delete(recipe.deleteRecipe)
  .put(recipe.updateRecipe);
app.route('/api/v1/recipes/:id/reviews')
  .post(review.postReview);
app.route('/api/v1/reviews')
  .get(review.getReviews);

app.listen(8080);
console.log(`Listening on port ${8080}`);

export default app;// for testing
