import review from '../models/reviews';

/*
 * GET /book route to retrieve all the books.
 */
function getReviews(req, res) {
  // Query the DB and if no errors, send all the books
  if (req.query.sort === 'upvotes' && req.query.order === 'desc') {
    review.sort((review1, review2) => review1.upVote - review2.upVote);
  }
console.log(review); 
  res.json(review);
}

/*
 * POST /book to save a new book.
 */
function postReview(req, res) {
  const item = req.body;
  if (!item.id) {
    return res.sendStatus(500);
  }
  review.push(item);

  res.send(`/Reviews/${item.id}`);
}

// export all the functions
export default {
  getReviews, postReview,
};
