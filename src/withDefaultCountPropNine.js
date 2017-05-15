import React from 'react';

const withDefaultCountPropNine = (Component) => (props) => (
  <Component count={9} {...props} />
)

export default withDefaultCountPropNine;
