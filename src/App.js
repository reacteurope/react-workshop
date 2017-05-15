import React, { Component } from 'react';
import { compose, withState, withHandlers, renameProp } from 'recompose';

const App = ({
  thumbnailUrl,
  name,
  updateName,
  favouriteText,
  updateFavouriteText,
  addListEntry,
  favourites
}) => (
  <div>
    <img src={thumbnailUrl} alt="Thumbnail Image" width="100" height="100" />
    <input type="text" value={name} onChange={updateName} />
    <form onSubmit={addListEntry}>
      <input type="text" value={favouriteText} onChange={updateFavouriteText} />
      <button type="submit">Add</button>
    </form>
    {favourites.map((favourite, index) => (
      <div key={`${favourite}-${index}`}>{favourite}</div>
    ))}
  </div>
);

const enhance = compose(
  renameProp('imageUrl', 'thumbnailUrl'),
  withState('name', 'setName', props => props.name),
  withState('favourites', 'setFavourites', []),
  withState('favouriteText', 'setFavouriteText', ''),
  withHandlers({
    updateName: ({ setName }) => event => {
      setName(event.target.value);
    },
    updateFavouriteText: ({ setFavouriteText }) => event => {
      setFavouriteText(event.target.value);
    },
    addListEntry: ({
      setFavourites,
      favourites,
      favouriteText,
      setFavouriteText
    }) => event => {
      event.preventDefault();
      setFavourites([favouriteText, ...favourites]);
      setFavouriteText('');
    }
  })
);

export default enhance(App);
