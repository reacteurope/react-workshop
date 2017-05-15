import React from 'react';

const withDefaultCountProp = (Component, defaultNumber) => (props) => (
  <Component count={defaultNumber} {...props} />
)

export default withDefaultCountProp;
