import { GraphQLClient } from 'graphql-request';

const graphqlAPI = process.env.HYGRAPH_PROJECT_API!;

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
