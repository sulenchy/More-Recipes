import model from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
      .then(user => res.status(201).send({
        status:`Success`,
        message: `User successfully signed up`,
        data: user,
      }))
      .catch(error => res.status(400).send({
        status: `Fail`,
        message: `Database not accessible. Check your connection...`,
      }));
  },
  // Requests and return list of users in users table
  listAll(req, res) {
    return users
      .all()
      .then(usersList => res.status(200).send({
        status: `Success`,
        message: `All users selected successfully`,
        data: usersList,
      }))
      .catch(error => res.status(400).send({
        status: 'Failure',
        message: error.message,
      }));
  },

  list(req, res) {
    return users
      .findAll({
        include: [{
          model: recipes,
          as: 'recipes',
        }],
      })
      .then(varUsers => res.status(200).send({
        status: `Success`,
        message: `Selection made successfully`,
        data: varUsers,
      }))
      .catch(error => res.status(400).send({
        status: `Failure`,
        message: error.message
      }));
  },

  signIn(req, res) {
    return users
      .findOne({
        where: {
          email: req.body.email,
          password: req.body.password,
        },
      })
      .then((varUsers) => {
        if (!varUsers) {
          return res.status(404).send({
            status: `failure`,
            message: 'User cannot be found',
          });
        }
        const passwordIsCorrect = bcrypt.compareSync(req.body.password, varUsers.password);
        if (!passwordIsCorrect) {
          return res.status(401).send({
            status: error.message,
            message: `Username or password is incorrect`,
          });
        }
        // encrypt jwt here
        const token = jwt.sign({ id: varUsers.id }, process.env.SECRET_KEY);
        return res.status(200).send({
          status: `Success`,
          messsage: 'login successful',
        });
      });
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
            status: `Failure`,
            message: 'User Not Found',
          });
        }
        return varUsers
          .update({
            password: req.body.password || varUsers.password,
          })
          .then(() => res.status(200).send({
            status: 'success',
            message: `User info successfully updated`,
            data: varUsers,
          }))
          .catch(error => res.status(400).send({
            status: error.message,
            message: `Error updating user info`,
          }));
      })
      .catch(error => res.status(400).send({
        status: error.message,
        message: `Error updating user info`,
      }));
  },

  destroy(req, res) {
    return users
      .findById(req.params.userId)
      .then((varUsers) => {
        if (!varUsers) {
          return res.status(400).send({
            status: `Error encountered`,
            message: `User not existing`,
          });
        }
        return varUsers
          .destroy()
          .then(() => res.status(204).send({
            status: `Success`,
            message: `${req.params.userId} user record deleted `,
          }))
          .catch(error => res.status(400).send({
            status: error.message,
            message: `User info cannot be deleted`,
          }));
      })
      .catch(error => res.status(400).send({
        status: error.message,
        message: `User info cannot be deleted`,
      }));
  },
};

export default post;
