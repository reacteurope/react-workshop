import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import AddIngredient from './AddIngredient';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3001'
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/add-ingredient">+ Ingredient</Link>
        </div>
        <div>
          <Link to="/add-recipe">+ Recipe</Link>
        </div>
        <Route exact path="/" component={Recipes} />
        <Route exact path="/add-ingredient" component={AddIngredient} />
        <Route exact path="/add-recipe" component={AddRecipe} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
