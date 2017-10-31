import model from '../models';
// const Todo = require('../models').Todo;
const users = model.Users;

const post = {
  create(req, res) {
    return users
      .create({
        email: req.body.email,
        password: req.body.password,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};

export default post;
