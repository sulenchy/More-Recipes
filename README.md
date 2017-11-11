[![Build Status](https://travis-ci.org/sulenchy/More-Recipes.svg?branch=staging)](https://travis-ci.org/sulenchy/More-Recipes)[![Coverage Status](https://coveralls.io/repos/github/sulenchy/More-Recipes/badge.svg?branch=staging)](https://coveralls.io/github/sulenchy/More-Recipes?branch=staging) 

# More-Recipes
More-Recipes provides a platform for users to share the awesome and exciting  recipe ideas they have invented or learnt.  Suppose a user comes up with a recipe,  he/she can post it on More-Recipes and  get feedback in form of reviews and votes from other users who explore that recipe. Users can also keep a list of their favorite recipes on the application.

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.
An API route that allows a user add a recipe:
    POST: /api/recipes
An API route that allows a user modify a recipe
     PUT: /api/recipes/<recipeId>
An API route that allows a user to delete a recipe
     DELETE: /api/recipes/<recipeId>
An API route that allows a user to get all recipes in the application
     GET: /api/recipes
An API route that allows a user post a review for a recipe
     POST: /api/recipes/<recipeId>/reviews
An API route that allows a user to get just recipes with the most upvotes
     GET: /api/recipes?sort=upvotes&order=des


## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

Andela distributes opportunities. We disseminate Learning and catalyse Technology leadership. The project is founded on the premise that aspiring Technology Leaders learn programming whilst building things that matter and that the best way to learn is by building a complete product. 

## Dependencies

{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "lib/server.js",
  "scripts": {
    "test": "mocha --compilers js:babel-core/register ./lib/test/**/*.js --exit --timeout 10000",
    "start": "nodemon lib/server.js --exec babel-node",
    "build": "babel lib -d dist",
    "serve": "node dist/server.js",
    "execute-script": "babel-tape-runner server.js || exit 0"
  },
  "author": "sulenchy",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.2",
    "chai": "^4.1.2",
    "chai-http": "^3.0.0",
    "config": "^1.27.0",
    "eslint": "^4.10.0",
    "express": "^4.16.2",
    "g": "^2.0.1",
    "mocha": "^4.0.1",
    "morgan": "^1.9.0",
    "nodemon": "^1.12.1",
    "swagger-tools": "^0.10.3",
    "uuid": "^3.1.0"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "eslint-config-airbnb-base": "^12.1.0",
    "eslint-plugin-import": "^2.8.0"
  }
}

## Installation

Provide code examples and explanations of how to get the project.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

"license": "ISC"