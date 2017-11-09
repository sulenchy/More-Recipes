'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = _models2.default.Users;
var recipes = _models2.default.recipes;

var post = {
  // Signup new user
  /**
   * @
   */
  create: function create(req, res) {
    return users.create({
      email: req.body.email,
      password: _bcrypt2.default.hashSync(req.body.password, 10)
    }).then(function (user) {
      return res.status(201).send(user);
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },

  // Requests and return list of users in users table
  listAll: function listAll(req, res) {
    return users.all().then(function (usersList) {
      return res.status(200).send(usersList);
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  list: function list(req, res) {
    return users.findAll({
      include: [{
        model: recipes,
        as: 'recipes'
      }]
    }).then(function (varUsers) {
      return res.status(200).send(varUsers);
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  signIn: function signIn(req, res) {
    return users.findOne({
      where: {
        email: req.body.email
      }
    }).then(function (varUsers) {
      if (!varUsers) {
        return res.status(404).send({
          message: 'User cannot be found'
        });
      }
      var passwordIsCorrect = _bcrypt2.default.compareSync(req.body.password, varUsers.password);
      if (!passwordIsCorrect) {
        return res.status(401).send({
          error: 'wrong username or password'
        });
      }
      // encrypt jwt here
      var token = _jsonwebtoken2.default.sign({ id: varUsers.id }, 'Test');
      return res.status(200).send({
        messsage: 'login successful',
        Token: token
      });
      // .catch(error => res.status(400).send(error.message));
    });
  },
  update: function update(req, res) {
    return users.findById(req.params.userId, {
      include: [{
        model: recipes,
        as: 'recipes'
      }]
    }).then(function (varUsers) {
      if (!varUsers) {
        return res.status(404).send({
          message: 'User Not Found'
        });
      }
      return varUsers.update({
        password: req.body.password || varUsers.password
      }).then(function () {
        return res.status(200).send(varUsers);
      }) // Send back the updated todo.
      .catch(function (error) {
        return res.status(400).send(error);
      });
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  destroy: function destroy(req, res) {
    return users.findById(req.params.userId).then(function (varUsers) {
      if (!varUsers) {
        return res.status(400).send({
          message: 'User Not Found'
        });
      }
      return varUsers.destroy().then(function () {
        return res.status(204).send(req.params.userId + ' user record deleted ');
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  }
};

exports.default = post;