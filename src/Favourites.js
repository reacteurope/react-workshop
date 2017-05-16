import React from 'react';
import { compose, withState, withHandlers, renameProp } from 'recompose';

const Favourites = ({
  thumbnailUrl,
  name,
  updateName,
  favouriteText,
  updateFavouriteText,
  addListEntry,
  favourites
}) => (
  <div>
    <img src={thumbnailUrl} alt="Thumbnail" height="100" />
    <div>
      <input type="text" value={name} onChange={updateName} />
    </div>
    <form onSubmit={addListEntry}>
      <input
        type="text"
        value={favouriteText}
        onChange={updateFavouriteText}
        placeholder="add new item here …"
      />
      <button type="submit">Add</button>
    </form>
    {favourites.map((favourite, index) => (
      <div key={`${favourite}-${index}`}>{favourite}</div>
    ))}
  </div>
);

const enhance = compose(
  // TODO add your higher order components here
);

export default enhance(Favourites);
