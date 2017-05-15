import React from 'react';
import { compose, withState } from 'recompose';

const enhance = compose(
  withState('isFetching', 'setIsFetching', false),
  withState('data', 'setData', null)
);

export default url => Component =>
  enhance(({ data, setData, isFetching, setIsFetching, ...props }) => {
    if (!isFetching) {
      fetch(url).then(res => res.json()).then(({ results }) => {
        setData(results);
      });
      setIsFetching(true);
    }
    return <Component {...props} data={data} loading={data === null} />;
  });
