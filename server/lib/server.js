import express from 'express';
import logger from 'morgan';


const app = express();
app.use(logger('dev'));
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});  

app.get('/about', (req, res) => {
  res.send('about');
});

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
