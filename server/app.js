import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = parseInt(process.env.PORT, 10) || 6000;
app.set('port', port);

// Require our routes into the application.
routes(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness. Check the docs to know the appropiate route',
}));

app.listen(port);

export default app;
