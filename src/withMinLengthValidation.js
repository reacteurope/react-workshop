import React from 'react';

const withMinLengthValidation = (Component, minLength) => (props) => (
  <div>
    <Component {...props} />
    {props.value.toString().length < minLength && <span>Minimum {minLength} required.</span>}
  </div>
)

export default withMinLengthValidation;
