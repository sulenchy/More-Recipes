'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reviews = require('../models/reviews');

var _reviews2 = _interopRequireDefault(_reviews);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*
 * GET /book route to retrieve all the books.
 */
function getReviews(req, res) {
  // Query the DB and if no errors, send all the books
  if (req.query.sort === 'upvotes' && req.query.order === 'desc') {
    _reviews2.default.sort(function (review1, review2) {
      return review1.upVote - review2.upVote;
    });
  }
  console.log(_reviews2.default);
  res.json(_reviews2.default);
}

/*
 * POST /book to save a new book.
 */
function postReview(req, res) {
  var item = req.body;
  if (!item.id) {
    return res.sendStatus(500);
  }
  _reviews2.default.push(item);

  res.send('/Reviews/' + item.id);
}

// export all the functions
exports.default = {
  getReviews: getReviews, postReview: postReview
};