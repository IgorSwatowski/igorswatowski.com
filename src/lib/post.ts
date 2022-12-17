import { GraphQLClient } from 'graphql-request';
import { graphqlAPI } from '../constants/constants';

const hygraph = new GraphQLClient(graphqlAPI);

const query = `
    query PostSingleQuery($slug: String) {
      post(where: { slug: $slug }) {
        title
        slug
        id
      }
    }
  ,
`;

export const getSinglePost = async () => {
  const { post } = await hygraph.request(query);
  return post;
};
