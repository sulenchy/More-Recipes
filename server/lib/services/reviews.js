// import uuid from 'uuid';

class ReviewsService {
  constructor() {
    this.reviews = [
      {
        id: 1,
        recipeId: 1,
        userId: 100,
        dateAdded: new Date(),
        comment: 'this is nice',
      },
      {
        id: 2,
        recipeId: 2,
        userId: 112,
        dateAdded: new Date(),
        comment: 'I think kyou should adjust it',
      },
      {
        id: 3,
        recipeId: 3,
        userId: 10,
        dateAdded: new Date(),
        comment: 'Good one but there is room for improvement',
      },
    ];
  }

  getReviews() {
    return this.reviews;
  }

  getReviewsSingleRecipe(recipeId) {
    const reviews = this.reviews.filter(p => p.recipeId === recipeId)[0];
    return reviews || null;
  }

  addReview(info) {
    // prevent a bit of bad/duplicate data
    if (!info || this.reviews.filter(p => (p.id === info.id && p.title ===
        info.title)).length > 0) {
      return false;
    }
    this.reviews.push(info);
    return true;
  }
}

export default ReviewsService;

