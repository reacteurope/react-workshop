/**
 * The root file that combines all of our types
 */
import Recipe from './Recipe';
import Ingredient from './Ingredient';

const Query = /* GraphQL */`
  type Query {
    recipes(vegetarian: Boolean, ingredient: String): [Recipe!]
    ingredients: [Ingredient!]
  }
`;

// TODO: Define your mutations
const Mutation = /* GraphQL */`

`

const Schema = /* GraphQL */`
  schema {
    query: Query
    mutation: Mutation
  }
`

export default [Schema, Mutation, Query, Recipe, Ingredient];
