import { GraphQLClient } from 'graphql-request';
import { graphqlAPI } from '@/constants/constants';

const hygraph = new GraphQLClient(graphqlAPI);

const query = `
    query AllPostsQuery($locale: Locale!) {
      posts(locales: [$locale]) {
          id
          title
          slug
          createdAt
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
