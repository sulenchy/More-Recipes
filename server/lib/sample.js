import express from 'express';

import RecipesController from './controllers/recipes';

import bodyParser from 'body-parser';

// var bodyParser = require('body-parser')
;

const app = express();


// create application/json parser

let jsonParser = bodyParser.json();


// create application/x-www-form-urlencoded parser

let urlencodedParser = bodyParser.urlencoded({ extended: false });


const apiRouter = express.Router();

// app.use('/api/v1', apiRouter);

app.use(bodyParser.json({ type: 'application/*+json' }));


// let PlayersController = require('./controllers/pls');


const rc = new RecipesController(apiRouter);



app.get('/api/recipes', (req, res) => {
  res.send(rc.getRecipes());
});



app.get('/api/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.send(rc.getSingleRecipe(id));
});

app.get('/api/recipes/:id/Reviews/', (req, res) => {
  const id = parseInt(req.params.id);
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

app.delete('/api/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.send(rc.deleteSingleRecipe(id));
});

app.put('/api/v1/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.send(rc.putRecipe(id));
});

// POST /api/users gets JSON bodies
app.post('/api/recipes', function (req, res) {
  if (!req.body) return res.sendStatus(400);
  return res.send(req.body);
  // create user in req.body
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

//end of server.js
