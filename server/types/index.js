/**
 * The root file that combines all of our types
 */

// TODO: Define your queries
const Query = /* GraphQL */`
	type Query {
		dummy: String
	}
`;

const Schema = /* GraphQL */`
	schema {
		query: Query
	}
`

// TODO: Add all of your types to this array
export default [Schema, Query];
