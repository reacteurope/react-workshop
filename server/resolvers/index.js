/**
 * The root file that combines all of our resolvers
 */
import { getRecipes, addRecipe } from '../models/Recipe';
import {
  getIngredient,
  addIngredient,
  getIngredients
} from '../models/Ingredient';

export default {
  Recipe: {
    ingredients: ({ ingredients }) => {
      return Promise.all(
        ingredients.map(ingredient => getIngredient(ingredient))
      );
    }
  },
  Query: {
    recipes: (_, args) => getRecipes(args),
    ingredients: (_, args) => getIngredients(args)
  },
  Mutation: {
    // TODO add mutations here
  }
};
