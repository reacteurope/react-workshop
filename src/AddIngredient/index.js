import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, withState } from 'recompose';

const AddIngredient = ({ name, setName, addIngredient, successMessage }) => (
  <form onSubmit={addIngredient}>
    <input
      type="text"
      value={name}
      onChange={({ target }) => {
        setName(target.value);
      }}
    />
    <button type="submit">Create Ingredient</button>
    {successMessage || <div>{successMessage}</div>}
  </form>
);

const enhance = compose(
  withState('name', 'setName', ''),
  withState('successMessage', 'setSuccessMessage', ''),
  // TODO add ingredient mutation here
);

export default enhance(AddIngredient);
