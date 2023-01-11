import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Wordpress } from '../constants/constants';

export const client = new ApolloClient({
  uri: `${Wordpress}/graphql`,
  cache: new InMemoryCache(),
});
