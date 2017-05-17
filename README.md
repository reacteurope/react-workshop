# Lab #6: Mutations

In this lab your task is to make it possible to add ingredients and recipes to our app. This needs to be implemented on both the client _and_ the server!

> Tip: Implement the backend first, make the tests pass and verify it works via GraphiQL before jumping to the frontend.

## Adding ingredients

### Backend

You need to add an `addIngredient` mutation to your schema and resolvers. (`server/types/index.js`, `server/resolvers/index.js`) The mutation should accept a single argument, `name`, which is a `String`.

### Frontend

We provide you with an `AddIngredient` component which you need to hook up with the GraphQL mutation.

## Adding recipes

### Backend

You need to add an `addRecipe` mutation to your schema and resolvers. (`server/types/index.js`, `server/resolvers/index.js`)

The mutation should accept a more complex `RecipeInput` object as the single argument, which contains:

1. A `title`, which is a string
2. If it's `vegetarian` as a boolean
3. It's `ingredients` as an array of ingredient IDs
4. And the `preparation` steps as an array of strings

### Frontend

We already provide you with an `AddRecipe` component. You need to fetch the ingredients to fill the `<select>` and also hook it up with the GraphQL mutation.

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
