'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _recipes = require('../services/recipes');

var _recipes2 = _interopRequireDefault(_recipes);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var rs = new _recipes2.default();

var RecipesController = function () {
  function RecipesController(router) {
    _classCallCheck(this, RecipesController);

    this.router = router;
    this.registerRoutes();
    this.getRecipes();
    this.getSingleRecipe();
    // this.putRecipe();
    this.postRecipe();
  }

  _createClass(RecipesController, [{
    key: 'registerRoutes',
    value: function registerRoutes() {
      this.router.get('/recipes', this.getRecipes.bind(this));
      this.router.get('/recipes/:id', this.getSingleRecipe.bind(this));
      this.router.post('/recipes', this.postRecipe.bind(this));
      // this.router.put('/recipes/:id', this.putRecipe.bind(this));
    }
  }, {
    key: 'getRecipes',
    value: function getRecipes() {
      var recipes = rs.getRecipes();
      return recipes;
    }
  }, {
    key: 'getSingleRecipe',
    value: function getSingleRecipe(idParam) {
      var id = idParam;
      var recipe = rs.getSingleRecipe(id);
      if (!recipe) {
        return 'error 404';
      }
      return recipe;
    }
  }, {
    key: 'getReviewsSingleRecipe',
    value: function getReviewsSingleRecipe(idParam) {
      var id = idParam;
      var recipeReviews = rs.getReviewsSingleRecipe(id);
      if (!recipeReviews) {
        return 'error 404';
      }
      return recipeReviews;
    }
  }, {
    key: 'deleteSingleRecipe',
    value: function deleteSingleRecipe(idParam) {
      var id = idParam;
      var recipe = rs.deleteSingleRecipe(id);
      if (!recipe) {
        return 'error 404';
      }
      return recipe;
    }

    // putRecipe(idParam) {
    //   const id = parseInt(idParam, 10);
    //   const existingRecipe = rs.getSingleRecipe(id);

    //   if (!existingRecipe) {
    //     // const recipeInfo = req.body;
    //     //recipeInfo.id = id;
    //     if (rs.addRecipe(recipeInfo)) {
    //       return 'Location', `/recipes/${id}`;
    //       return 'Status(201)';
    //     } else {
    //       return 'Status(500)';
    //     }
    //   } else if (rs.updateSingleRecipe(id)) {
    //     return 'Status(204)';
    //   } else {
    //     return 'Status(404)';
    //   }
    // }

  }, {
    key: 'postRecipe',
    value: function postRecipe(recipeInfo) {
      //console.log(recipeInfo);
      if (rs.addRecipe(recipeInfo)) {
        //res.setHeader('Location', `/api/recipes/${recipeInfo.id}`);
        return 'Status Code 200: A new recipe record has been added successfully';
      }
      return 'Status Code 500';
    }
  }]);

  return RecipesController;
}();

// module.export = RecipesController;


exports.default = RecipesController;