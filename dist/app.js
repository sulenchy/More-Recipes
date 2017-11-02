'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

var port = parseInt(process.env.PORT, 10) || 6000;
app.set('port', port);

// Require our routes into the application.
(0, _routes2.default)(app);

app.get('*', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to the beginning of nothingness. Check the docs to know the appropiate route'
  });
});

app.listen(port);

exports.default = app;