import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, withState } from 'recompose';
import withLoading from '../withLoading';

const AddRecipe = ({
  data,
  title,
  setTitle,
  addRecipe,
  successMessage,
  setIngredientIds,
  ingredientIds,
  preparation,
  setPreparation,
  vegetarian,
  setVegetarian
}) => (
  <form onSubmit={addRecipe}>
    <input
      type="text"
      value={title}
      placeholder="Recipe Title"
      onChange={({ target }) => {
        setTitle(target.value);
      }}
    />
    <h2>Ingredients</h2>
    <div>
      <select
        value={''}
        onChange={({ target }) => {
          if (target.value !== '') {
            setIngredientIds(ingredientIds.concat([target.value]));
          }
        }}
      >
        <option value={''}>Choose an Ingredient</option>
        {data.ingredients.map(ingredient => (
          <option key={ingredient._id} value={ingredient._id}>
            {ingredient.name}
          </option>
        ))}
      </select>
      {ingredientIds.map(id => (
        <div key={id}>
          {data.ingredients.find(ingredient => ingredient._id === id).name}
        </div>
      ))}
    </div>
    <h2>Preparation</h2>
    <div>
      {preparation.map((entry, index) => (
        <input
          key={`${entry}-${index}`}
          type="text"
          value={entry}
          onChange={({ target }) => {
            const newPreparation = [...preparation];
            newPreparation[index] = target.value;
            setPreparation(newPreparation);
          }}
        />
      ))}
      <div>
        <button
          type="button"
          onClick={() => {
            setPreparation([...preparation, '']);
          }}
        >
          Add Preparation Entry
        </button>
      </div>
    </div>
    <h2>Vegetarian</h2>
    <div>
      <select
        value={vegetarian}
        onChange={({ target }) => {
          setVegetarian(target.value);
        }}
      >
        <option value={true}>True</option>
        <option value={false}>False</option>
      </select>
    </div>
    <button type="submit">Create Recipe</button>
    {successMessage || <div>{successMessage}</div>}
  </form>
);

const enhance = compose(
  withState('title', 'setTitle', ''),
  withState('vegetarian', 'setVegetarian', false),
  withState('preparation', 'setPreparation', ['']),
  withState('ingredientIds', 'setIngredientIds', []),
  withState('successMessage', 'setSuccessMessage', ''),
  // TODO add ingredients query and add recipe mutation here
  withLoading,
);

export default enhance(AddRecipe);
