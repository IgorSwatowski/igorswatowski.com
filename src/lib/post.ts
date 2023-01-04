import { GraphQLClient } from 'graphql-request';
import { graphqlAPI } from '../constants/constants';

const hygraph = new GraphQLClient(graphqlAPI);

const query = `
  query PostSingleQuery($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      id
      createdAt
      content {
        text
      }
      createdBy {
        name
      }
    }
  }
`;

export const getSinglePost = async (slug: string) => {
  const variables = {
    slug,
  };
  const { post } = await hygraph.request(query, variables);
  return post;
};
