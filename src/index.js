import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Recipes from './Recipes';
// TODO import from apollo-client, react-apollo and inject the client via ApolloProvider

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Recipes} />
    </div>
  </Router>,
  document.getElementById('root')
);
