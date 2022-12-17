import { GraphQLClient } from 'graphql-request';
import { graphqlAPI } from '../constants/constants';

const hygraph = new GraphQLClient(graphqlAPI);

const query = `
    query AllPostsQuery {
      posts {
          id
          title
          slug
      }
    }
`;

export const getAllPosts = async () => {
  const { posts } = await hygraph.request(query);
  return posts;
};
