// import uuid from 'uuid';

class RecipesService {
  constructor() {
    this.recipes = [
      {
        id: 1,
        title: 'amala',
        decription: 'bla bla bla',
        upVote: 20,
        downVote: 3,
        userId: 100,
        dateAdded: '12/2/2013',
      },
      {
        id: 2,
        title: 'Rice and stew',
        decription: 'bla bla bla',
        upVote: 50,
        downVote: 3,
        userId: 100,
        dateAdded: '12/2/2013',
      },
      {
        id: 3,
        title: 'Okro Soup',
        decription: 'bla bla bla',
        upVote: 10,
        downVote: 3,
        userId: 100,
        dateAdded: '12/2/2013',
      },
    ];
  }

  getRecipes() {
    return this.recipes;
  }

  getSingleRecipe(recipeId) {
    const recipe = this.recipes.filter(p => p.id === recipeId)[0];
    return recipe || null;
  }

  getReviewsSingleRecipe(recipeId) {
    const recipe = this.recipes.filter(p => p.id === recipeId)[0];
    return recipe.reviews || null;
  }

  deleteSingleRecipe(recipeId) {
    const recipe = this.recipes.filter(p => p.id === recipeId)[0];
    return this.recipes.splice(this.recipes.indexOf(recipe), 1) || null;
  }

  updateSingleRecipe(recipeId) {
    const recipe = this.recipes.filter(p => p.id === recipeId)[0];
    return this.recipes.splice(this.recipes.indexOf(recipe), 1) || null;
  }

  addRecipe(info) {
    // prevent a bit of bad/duplicate data
    if (!info || this.recipes.filter(p => (p.id === info.id && p.title ===
        info.title)).length > 0) {
      return false;
    }
    this.recipes.push(info);
    return true;
  }
}

export default RecipesService;
