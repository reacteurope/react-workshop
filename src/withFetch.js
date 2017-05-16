import React from 'react';
import fetch from 'isomorphic-fetch';
import { compose, withState, lifecycle } from 'recompose';

const enhance = (url) => compose(
  withState('data', 'setData', null),
  lifecycle({
    componentDidMount() {
      const { setData } = this.props;
      fetch(url).then(res => res.json()).then(({ results }) => {
        setData(results);
      });
    },
  })
);

export default url => Component =>
  enhance(url)(({ setData, ...props }) => {
    return <Component {...props} loading={props.data === null} />;
  });
