# Lab #5: Apollo Client

In this lab you have to build an app for our recipes backend! Your job is to:

1. Get Apollo Client setup
2. Connect to the GraphQL server
3. Display all the recipes on the page
4. Make the recipes filterable by ingredient

## Setup Apollo Client

You first need to instantiate a client in `src/index.js`. Inject the client into your app via an `ApolloProvider`. The GraphQL backend runs under `http://localhost:3001`, so you'll need to create a network interface as well:

```js
import { createNetworkInterface } from 'react-apollo';

createNetworkInterface({
  uri: 'http://localhost:3001'
})
```

## Fetch data from the backend

The `react-apollo` package ships with the `graphql` higher order component. Use it in `src/Recipes.js` to create a query which fetches all the recipes. In order to show the ingredients filter you'll also need to fetch all the ingredients.

> Note: You should fetch recipes and ingredients in one query.

## Commands

```sh
# Start the server
npm run server
# Seed the server with some data so your database isn't empty
npm run seed
# Start the frontend
npm start
```

If you visit the browser at `http://localhost:3000` you should see this error `TypeError: Cannot read property 'loading' of undefined`.

## Tips

- Again use `GraphiQL` to your advantage! Go to http://localhost:3001/graphiql for exploring queries.

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
