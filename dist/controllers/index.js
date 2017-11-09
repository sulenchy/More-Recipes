'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _recipes = require('./recipes');

var _recipes2 = _interopRequireDefault(_recipes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const todos = require('./todos');

exports.default = {
  users: _users2.default,
  recipes: _recipes2.default
};