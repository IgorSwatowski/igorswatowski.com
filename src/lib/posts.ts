import { GraphQLClient } from 'graphql-request';
import { graphqlAPI } from '../constants/constants';

const hygraph = new GraphQLClient(graphqlAPI);

const query = `
    query AllPostsQuery($locale: Locale!) {
      postCollection(locales: [$locale]) {
          id
          title
          slug
          date
          author {
            name
          }
          content {
            json
          }
          excerpt
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
