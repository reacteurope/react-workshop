import React from 'react';
import fetch from 'isomorphic-fetch';
import { compose, withState, lifecycle } from 'recompose';

const enhance = compose(
  withState('isFetching', 'setIsFetching', false),
  withState('data', 'setData', null),
  lifecycle({
    componentDidMount() {
      console.log('weeee')
      // this.props.requestSignup()
      //   .then(() => { this.props.setSuccessfulRequest(true) })
      //   .catch(() => {
      //     // eslint-disable-next-line no-alert
      //     alert('We are sorry, the request failed. Please reach out to hello@serverless.com')
      //   })
    },
  })
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
