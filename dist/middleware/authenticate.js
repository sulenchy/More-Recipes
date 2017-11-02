'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  verifyUser: function verifyUser(req, res, next) {
    var token = req.headers.token || req.headers['x-access-token'];
    console.log(token);
    if (token) {
      _jsonwebtoken2.default.verify(token, 'Test', function (err, decoded) {
        if (err) {
          return res.status(403).send({
            success: false,
            message: 'Invalid token'
          });
        }
        req.decoded = decoded;
        next();
      });
    } else {
      return res.status(403).send({
        success: false,
        message: 'Token not Provided'
      });
    }
  }
};