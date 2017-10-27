import express from 'express';
import logger from 'morgan';

// recipeResources contains dummy data
const recipeResources = [
  {
    id: 1,
    title: 'Foo',
    ingredient: 'seasoning,salt',
    direction: 'bla bla',
    upVote: 24,
    downVote: 2,
  },
  {
    id: 2,
    title: 'boo',
    ingredient: 'seasoning,salt',
    direction: 'bla bla boo',
    upVote: 24,
    downVote: 2,
  },

];

const app = express();
app.use(logger('dev'));

// post method with string response
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

// get method with response from the recipeResource
app.get('/reciperesources/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const result = recipeResources.filter(r => r.id === id)[0];

  if (!result) {
    res.sendStatus(404);
  } else {
    res.send(result);
  }
});

// post method with response from reciperesource (bug: error 500)
app.post('/reciperesources', (req, res) => {
  const item = res.body;
  // const id = recipeResources.length + 1;
  console.log(item);
  if (!item.id) {
    return res.sendStatus(500);
  }

  recipeResources.push(item);
  // console.log(id);
  res.send(`/reciperesources/ ${item.id}`);
});

// get method with /recipeResource path responding from recipeResource
app.get('/recipeResources', (req, res) => {
  res.send(recipeResources);
});

// get method with string response
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// put method with string response
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

// get method with /about path responding string response
app.get('/about', (req, res) => {
  res.send('about');
});

// delete method with /user path responding a string response
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
