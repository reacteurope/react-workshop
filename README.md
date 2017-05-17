# Lab #6: Mutations

In this lab your task is to add two mutations to the backend as well as the frontend

## Add Ingredient Mutation

You need to add `addIngredient` to your schema and resolvers. To extend the schema look for the TODO entry in `server/types/index.js`. To extend the resolvers look into `server/resolvers/index.js`. The mutation `addIngredient` should accept one argument of name which is a string.

For the frontend we already provide you an `AddIngredient` component. There you need to fill in the GraphQL mutation.

## Add Recipe Mutation

You need to add `addRecipe` to your schema and resolvers. To extend the schema look for the TODO entry in `server/types/index.js`. To extend the resolvers look into `server/resolvers/index.js`. The mutation `addRecipe` should accept a more complex RecipeInput object containing:

1. title of type String
2. vegetarian of type Boolean
3. ingredients of type Array of IDs
4. preparation of type Array of Strings

For the frontend we already provide you an `AddRecipe` component. There you need to fetch the ingredients to fill the <select>, but also provide the GraphQL mutation.

## Commands

```sh
# Run the backend tests
npm test
# Start the server
npm run server
# Seed the server with some data so your database isn't empty
npm run seed
# Start the local server
npm start
```

If you visit the browser at http://localhost:3000 you should see this error `TypeError: Cannot read property 'loading' of undefined`.

## Tips

- Start implementing the backend first and make sure the tests are green!
- Again! Use `GraphiQL` to your advantage! Go to http://localhost:3001/graphiql for exploring queries.

## Bonus Labs

1. Explore various ways how to keep the data properly in sync (update, refetchQueries, optimistic response)
2. Follow the instructions in the branch `7-weather-app`

## License

Copyright (C) 2017  Maximilian Stoiber & Nikolaus Graf. You may use this repo for non-commercial use under the GPLv3 license.

```
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
```

(see [LICENSE.md](LICENSE.md) for the full license text)
