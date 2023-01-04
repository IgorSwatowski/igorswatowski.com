import { GraphQLClient } from 'graphql-request';
import { graphqlAPI } from '../constants/constants';

const hygraph = new GraphQLClient(graphqlAPI);

const query = `
    query AllPostsQuery {
      posts {
          id
          title
          slug
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

export const getAllPosts = async (locale: string) => {
  const variables = {
    locale,
  };
  const { posts } = await hygraph.request(query, variables);
  return posts;
};
