
import RecipesService from '../services/recipes';

const rs = new RecipesService();

class RecipesController {
  constructor(router) {
    this.router = router;
    this.registerRoutes();
    this.getRecipes();
    this.getSingleRecipe();
    // this.putRecipe();
    this.postRecipe();
  }

  registerRoutes() {
    this.router.get('/recipes', this.getRecipes.bind(this));
    this.router.get('/recipes/:id', this.getSingleRecipe.bind(this));
    this.router.post('/recipes', this.postRecipe.bind(this));
    // this.router.put('/recipes/:id', this.putRecipe.bind(this));
  }

  getRecipes() {
    const recipes = rs.getRecipes();
    return recipes;
  }

  getSingleRecipe(idParam) {
    const id = idParam;
    const recipe = rs.getSingleRecipe(id);
    if (!recipe) {
      return 'error 404';
    }
    return recipe;
  }

  getReviewsSingleRecipe(idParam) {
    const id = idParam;
    const recipeReviews = rs.getReviewsSingleRecipe(id);
    if (!recipeReviews) {
      return 'error 404';
    }
    return recipeReviews;
  }

  deleteSingleRecipe(idParam) {
    const id = idParam;
    const recipe = rs.deleteSingleRecipe(id);
    if (!recipe) {
      return 'error 404';
    }
    return recipe;
  }

  putRecipe(idParam) {
    const id = parseInt(idParam, 10);
    const existingRecipe = rs.getSingleRecipe(id);

    if (!existingRecipe) {
      const recipeInfo = req.body;
      recipeInfo.id = id;
      if (rs.addRecipe(recipeInfo)) {
        return 'Location', `/recipes/${id}`;
        return 'Status(201)';
      } 
        return 'Status(500)';
      
    } else if (rc.updateRecipe(id, req.body)) {
      return 'Status(204)';
    } else {
      res.sendStatus(404);
    }
  }

  postRecipe(recipeInfo) {
    // console.log(recipeInfo);
    if (rs.addRecipe(recipeInfo)) {
      rs.addRecipe(recipeInfo);
      return 'Status Code 200: A new recipe record has been added successfully';
    }
    return 'Status Code 500';
  }
}
// module.export = RecipesController;
export default RecipesController;
