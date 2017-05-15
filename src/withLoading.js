import React from 'react';

export default Component => props => {
  if (props.loading) {
    return <div>Loading {'…'}</div>;
  }
  return <Component {...props} />;
};
