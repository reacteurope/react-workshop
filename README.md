# Lab #5: Apollo Client (Queries)

In this lab your task is to setup the frontend and and enhance the Recipes component to fill with recipe data.

## Setup the Apollo Client

You first need to instantiate a client in `src/index.js`. Inject the client via ApolloProvider. One important hint: your GraphQL backend runs under `http://localhost:3001`. So when you create the client use

```js
createNetworkInterface({
  uri: 'http://localhost:3001'
})
```

## Fetch data from the Backend

The package 'react-apollo' ships with a higher order component `graphql` which is already imported in `src/Recipes`. You should create a query to fetch all the recipes. In order to show the ingredients filter your also need to fetch all the ingredients.

**Hint: you can fetch recipes and ingredients in one query.**

## Commands

```sh
# Start the server
npm run server
# Seed the server with some data so your database isn't empty
npm run seed
# Start the local server
npm start
```

If you visit the browser at http://localhost:3000 you should see this error `TypeError: Cannot read property 'loading' of undefined`.

## Tips

- Again! Use `GraphiQL` to your advantage! Go to http://localhost:3001/graphiql for exploring queries.

## Bonus Labs

1. Remove the preparation and ingredients details from the Recipes and create a separate detail page for each Recipe. Link from the recipes list to each detail page. We already included `react-router-dom` to make it easy for you. **Hint: use `withRouter` to use url params as input variable for your query.**
2. Add pagination to the recipes list. You can get more insights here: http://dev.apollodata.com/react/pagination.html

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
