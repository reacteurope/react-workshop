import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Recipes from './Recipes';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3001'
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path="/" component={Recipes} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
