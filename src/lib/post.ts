import { GraphQLClient } from 'graphql-request';
import { graphqlAPI } from '@/constants/constants';

const hygraph = new GraphQLClient(graphqlAPI);

const query = `
  query PostSingleQuery($id: ID!) {
    post(where: { id: $id }) {
      title
      slug
      id
      createdAt
    }
  }
`;

export const getSinglePost = async (id: string) => {
  const variables = {
    id,
  };
  const { post } = await hygraph.request(query, variables);
  return post;
};
