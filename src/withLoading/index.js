import React from 'react';

export default Component => props => {
  if (props.data.loading) {
    return <div>Loading …</div>;
  }
  return <Component {...props} />;
};
