import { GraphQLClient } from 'graphql-request';
import { GetStaticProps } from 'next';
import { graphqlAPI } from '../../constants/constants';

const hygraph = new GraphQLClient(graphqlAPI);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const { post } = await hygraph.request(
    `
    query PostSingleQuery($slug: String) {
      post(where: { slug: $slug }) {
        title
        slug
        id
      }
    }
  `,
    {
      slug,
    },
  );

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const { posts } = await hygraph.request(`
    {
      posts {
        slug
        title
        id
      }
    }
  `);

  return {
    paths: posts.map(({ slug }: any) => ({
      params: { slug },
    })),
    fallback: false,
  };
};
