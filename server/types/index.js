/**
 * The root file that combines all of our types
 */

// TODO: Define your queries
const Query = /* GraphQL */`
	type Query {
		dummy: String
	}
`;

const Mutation = /* GraphQL */`
	type Mutation {
		dummy: String
	}
`

const Schema = /* GraphQL */`
	schema {
		query: Query
		mutation: Mutation
	}
`

// TODO: Add all of your types to this array
export default [Schema, Mutation, Query];
