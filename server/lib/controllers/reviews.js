
import ReviewsServices from '../services/reviews';

const rs = new ReviewsServices();

class ReviewsController {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
    this.getReviews();
    this.getReviewsSingleRecipe();
    this.postReview();
  }

  registerRoutes() {
    this.router.get('/recipes', this.getReviews.bind(this));
    this.router.get('/recipes/:id', this.getReviewsSingleRecipe.bind(this));
    this.router.post('/recipes', this.postReview.bind(this));
    // this.router.put('/recipes/:id', this.putRecipe.bind(this));
  }

  getReviews() {
    const reviews = rs.getReviews();
    return reviews;
  }

  getReviewsSingleRecipe(idParam) {
    const id = idParam;
    const recipeReviews = rs.getReviewsSingleRecipe(id);
    if (!recipeReviews) {
      return 'error 404';
    }
    return recipeReviews;
  }

  postReview(reviewInfo) {
    // console.log(recipeInfo);
    if (rs.addReview(reviewInfo)) {
      rs.addReview(reviewInfo);
      return 'Status Code 200: A new recipe record has been added successfully';
    }
    return 'Status Code 500';
  }
}

export default ReviewsController;
