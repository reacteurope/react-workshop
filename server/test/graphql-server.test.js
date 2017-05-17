import { graphql } from 'graphql';
import { mockDb, setup, teardown } from './mock-db';
jest.mock('../models/db', () => mockDb);

import schema from '../schema';

beforeAll(() => teardown());
afterAll(() => teardown());

describe('GraphQL server', () => {
  beforeEach(() => setup());
  afterEach(() => teardown());

  describe('Queries', () => {
    it('should return a list of recipes', () => {
      expect.assertions(1);
      const query = /* GraphQL */ `
        {
          recipes {
            title
            vegetarian
            preparation
          }
        }
      `;
      return graphql(schema, query).then(result => {
        expect(result).toMatchSnapshot();
      });
    });

    it('should return a list of recipes with its ingredients', () => {
      expect.assertions(1);
      const query = /* GraphQL */ `
        {
          recipes {
            title
            vegetarian
            preparation
            ingredients {
              _id
              name
            }
          }
        }
      `;
      return graphql(schema, query).then(result => {
        expect(result).toMatchSnapshot();
      });
    });

    it('should filter results by vegetarianism', () => {
      expect.assertions(1);
      const query = /* GraphQL */ `
        {
          recipes(vegetarian: true) {
            title
          }
        }
      `;
      return graphql(schema, query).then(result => {
        expect(result).toMatchSnapshot();
      });
    });

    it('should filter results by not vegetarianism', () => {
      expect.assertions(1);
      const query = /* GraphQL */ `
        {
          recipes(vegetarian: false) {
            title
          }
        }
      `;
      return graphql(schema, query).then(result => {
        expect(result).toMatchSnapshot();
      });
    });

    it('should filter results by ingredient ID', () => {
      expect.assertions(1);
      const query = /* GraphQL */ `
        {
          recipes(ingredient: "123asdf") {
            title
          }
        }
      `;
      return graphql(schema, query).then(result => {
        expect(result).toMatchSnapshot();
      });
    });
  });

  describe('Mutations', () => {
    it('should allow adding an ingredient', () => {
      expect.assertions(1);
      const mutation = /* GraphQL */ `
        mutation {
          addIngredient(name: "Brokkoli") {
            name
          }
        }
      `;
      return graphql(schema, mutation).then(result => {
        expect(result).toMatchSnapshot();
      });
    });

    it('should allow adding a recipe', () => {
      expect.assertions(1);
      const mutation = /* GraphQL */ `
        mutation enterRecipe($recipe: RecipeInput!) {
          addRecipe(recipe: $recipe) {
            title
            vegetarian
            preparation
            ingredients {
              name
            }
          }
        }
      `;
      const recipeInput = {
        recipe: {
          title: 'My favorite meal',
          vegetarian: true,
          ingredients: ['asdf123'],
          preparation: ['Get ingredients', 'Make Salad']
        }
      };
      return graphql(
        schema,
        mutation,
        undefined,
        undefined,
        recipeInput
      ).then(result => {
        expect(result).toMatchSnapshot();
      });
    });

    it('should return a list of ingredients', () => {
      expect.assertions(1);
      const query = /* GraphQL */ `
        {
          ingredients {
            _id
            name
          }
        }
      `;
      return graphql(schema, query).then(result => {
        expect(result).toMatchSnapshot();
      });
    });
  });
});
