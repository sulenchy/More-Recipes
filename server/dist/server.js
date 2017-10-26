'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize http server
var app = (0, _express2.default)();

// Handle / route
app.get('/', function (req, res) {
  return res.send('Hello sulenchy!');
});

// Launch the server on port 3000
var server = app.listen(3000, function () {
  var _server$address = server.address(),
      address = _server$address.address,
      port = _server$address.port;

  console.log('Listening at http://' + address + ':' + port);
});