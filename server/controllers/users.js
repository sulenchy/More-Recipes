import model from '../models';
import bcrypt from 'bcrypt';

const users = model.Users;
const recipes = model.recipes;

const post = {
  // Signup new user
  /**
   * @
   */
  create(req, res) {
    return users
      .create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  // Requests and return list of users in users table
  // list(req, res) {
  //   return users
  //     .all()
  //     .then(usersList => res.status(200).send(usersList))
  //     .catch(error => res.status(400).send(error));
  // },

  list(req, res) {
    return users
      .findAll({
        include: [{
          model: recipes,
          as: 'recipes',
        }],
      })
      .then(varUsers => res.status(200).send(varUsers))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return users
      .findById(req.params.userId, {
        include: [{
          model: recipes,
          as: 'recipes',
        }],
      })
      .then((varUsers) => {
        if (!varUsers) {
          return res.status(404).send({
            message: 'User cannot be found',
          });
        }
        return res.status(200).send({
          message: 'User logged in successfully',
        });
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return users
      .findById(req.params.userId, {
        include: [{
          model: recipes,
          as: 'recipes',
        }],
      })
      .then((varUsers) => {
        if (!varUsers) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return varUsers
          .update({
            password: req.body.password || varUsers.password,
          })
          .then(() => res.status(200).send(varUsers)) // Send back the updated todo.
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return users
      .findById(req.params.userId)
      .then((varUsers) => {
        if (!varUsers) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return varUsers
          .destroy()
          .then(() => res.status(204).send(`${req.params.userId} user record deleted `))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return TodoItem
      .find({
          where: {
            id: req.params.todoItemId,
            todoId: req.params.todoId,
          },
        })
      .then(todoItem => {
        if (!todoItem) {
          return res.status(404).send({
            message: 'TodoItem Not Found',
          });
        }
  
        return todoItem
          .update({
            content: req.body.content || todoItem.content,
            complete: req.body.complete || todoItem.complete,
          })
          .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  
  destroy(req, res) {
    return TodoItem
      .find({
          where: {
            id: req.params.todoItemId,
            todoId: req.params.todoId,
          },
        })
      .then(todoItem => {
        if (!todoItem) {
          return res.status(404).send({
            message: 'TodoItem Not Found',
          });
        }
  
        return todoItem
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};

export default post;
