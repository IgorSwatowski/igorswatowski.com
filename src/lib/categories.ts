import { GraphQLClient } from 'graphql-request';
import { graphqlAPI } from '../constants/constants';

const hygraph = new GraphQLClient(graphqlAPI);

const query = `
    query AllCategoriesQuery($locale: Locale!) {
      categoryCollection(locales: [$locale]) {
          title
          slug
      }
    }
`;

export const getAllCategories = async (locale: string) => {
  const variables = {
    locale,
  };
  const { categories } = await hygraph.request(query, variables);
  return categories;
};
