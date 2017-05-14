/**
 * The entry point for our GraphQL server
 */

import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import schema from './schema';

const PORT = 3001;
const GRAPHQL_PATH = '/';
const GRAPHIQL_PATH = '/graphiql';

const app = express();

// Set up the GraphQL endpoint
app.use(GRAPHQL_PATH, bodyParser.json(), graphqlExpress({ schema }));

// Set up GraphiQL
app.use(GRAPHIQL_PATH, graphiqlExpress({
  endpointURL: GRAPHQL_PATH,
}));

app.listen(PORT);

console.log(`GraphQL server started, listening at http://localhost:${PORT}${GRAPHQL_PATH}`);
console.log(`GraphiQL enabled, running at http://localhost:${PORT}${GRAPHIQL_PATH}`)
