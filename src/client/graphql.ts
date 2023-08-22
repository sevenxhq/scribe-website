import { GraphQLClient } from "graphql-request";

const graphQLUrl = process.env.GRAPHQL_URL as string;
const token = process.env.GITHUB_TOKEN as string;

export const client = new GraphQLClient(graphQLUrl as string, {
  headers: {
    authorization: `Bearer ${token as string}`,
  },
});
       