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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// import uuid from 'uuid';

var RecipesService = function () {
  function RecipesService() {
    _classCallCheck(this, RecipesService);

    this.recipes = [{
      id: 1,
      title: 'amala',
      decription: 'bla bla bla',
      upVote: 50,
      downVote: 3,
      userId: 100,
      dateAdded: '12/2/2013',
      reviews: [{
        dateReviewed: '2/2/2015',
        comment: 'Not that nice'
      }, {
        dateReviewed: '2/5/2015',
        comment: 'Not that nice'
      }, {
        dateReviewed: '2/7/2015',
        comment: 'Not that nice'
      }]

    }, {
      id: 2,
      title: 'Rice and stew',
      decription: 'bla bla bla',
      upVote: 50,
      downVote: 3,
      userId: 100,
      dateAdded: '12/2/2013',
      reviews: [{
        dateReviewed: '2/2/2015',
        comment: 'Not that nice'
      }, {
        dateReviewed: '2/5/2015',
        comment: 'Not that nice'
      }, {
        dateReviewed: '2/7/2015',
        comment: 'Not that nice'
      }]

    }, {
      id: 1,
      title: 'Okro Soup',
      decription: 'bla bla bla',
      upVote: 50,
      downVote: 3,
      userId: 100,
      dateAdded: '12/2/2013',
      reviews: [{
        dateReviewed: '2/2/2015',
        comment: 'Not that nice'
      }, {
        dateReviewed: '2/5/2015',
        comment: 'Not that nice'
      }, {
        dateReviewed: '2/7/2015',
        comment: 'Not that nice'
      }]

    }];
  }

  _createClass(RecipesService, [{
    key: 'getRecipes',
    value: function getRecipes() {
      return this.recipes;
    }
  }, {
    key: 'getSingleRecipe',
    value: function getSingleRecipe(recipeId) {
      var recipe = this.recipes.filter(function (p) {
        return p.id === recipeId;
      })[0];
      return recipe || null;
    }
  }, {
    key: 'getReviewsSingleRecipe',
    value: function getReviewsSingleRecipe(recipeId) {
      var recipe = this.recipes.filter(function (p) {
        return p.id === recipeId;
      })[0];
      return recipe.reviews || null;
    }
  }, {
    key: 'deleteSingleRecipe',
    value: function deleteSingleRecipe(recipeId) {
      var recipe = this.recipes.filter(function (p) {
        return p.id === recipeId;
      })[0];
      return this.recipes.splice(this.recipes.indexOf(recipe), 1) || null;
    }
  }, {
    key: 'updateSingleRecipe',
    value: function updateSingleRecipe(recipeId) {
      var recipe = this.recipes.filter(function (p) {
        return p.id === recipeId;
      })[0];
      return this.recipes.splice(this.recipes.indexOf(recipe), 1) || null;
    }
  }, {
    key: 'addRecipe',
    value: function addRecipe(info) {
      // prevent a bit of bad/duplicate data
      if (!info || this.recipes.filter(function (p) {
        return p.id === info.id && p.title === info.title;
      }).length > 0) {
        return false;
      }
      this.recipes.push(info);
      return true;
    }
  }]);

  return RecipesService;
}();

exports.default = RecipesService;