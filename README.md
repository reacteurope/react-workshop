# Lab #4: GraphQL

In this lab your task is to create a GraphQL server with `graphql-tools`. We've done all the setup for you and written the necessary database queries, you just focus on the GraphQL side of things.

There are tests verifying that you're returning the correct data, don't forget to run them!

## Commands

```sh
# Start the server
npm run server
# Seed the server with some data so your database isn't empty
npm run seed
# Test the server
npm run test
```

## Database queries

We've written all the necessary database queries for you so you can focus on GraphQL:

```javascript
import { getIngredient, getIngredients } from './models/Ingredient.js';
import { getRecipes } from './models/Recipe.js';
```

This is what they do:

```javascript
// Get an ingredient with a certain id
getIngredient(_id: String)
// Get a list of all the ingredients
getIngredients()
// Get a list of all the recipes, optionally filtered by being vegetarian or an ingredient ID it contains
getRecipes({ vegetarian?: Boolean, ingredient?: String })
```

## GraphQL Schema

### Recipe

A recipe has an `_id`, a `title`, a list of `ingredients`, some `preparation` steps and might be `vegetarian`. This is what a recipe looks like in the database:

```javascript
{
	_id: 'sdghdfg14',
	title: 'Salad',
	vegetarian: true,
	ingredients: ['dfgxg3745', 'zxge3258ma'],
	preparation: ['Get ingredients', 'Put them all in a bowl', 'Enjoy']
}
```

> **Note:** We want to match those ingredient IDs to actual ingredients in the resolvers. Don't just send down ingredient IDs!

## Ingredient

An ingredient only has an `_id` and a `name`. This is what an ingredient looks like in the database:

```javascript
{
	_id: 'dfgxg3745',
	name: 'Salad'
}
```

## Result

When you're finished it should be able to query for a list of recipes with their ingredients and filter them by being vegetarian or not:

```GraphQL
{
	recipes(vegetarian: true) {
		title
		vegetarian
		preparation
		ingredients {
			name
		}
	}
}
```

## Tips

- Use `GraphiQL` to your advantage, go to `localhost:3001/graphiql` for fast iteration speed.
- Write the types first, then get the resolvers for flat data to work, then finish with the resolvers for nested data (recipe.ingredients)

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
