import { GraphQLClient } from 'graphql-request';
import React from 'react';

const graphqlAPI = process.env.HYGRAPH_PROJECT_API!;

const hygraph = new GraphQLClient(graphqlAPI);

export async function getStaticProps({ params }: any) {
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
      slug: params.slug,
    }
  );

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await hygraph.request(`
    {
      posts {
        slug
        title
      }
    }
  `);

  return {
    paths: posts.map(({ slug }: any) => ({
      params: { slug },
    })),
    fallback: false,
  };
}


const PostSingle = ({ post }: any) => (
  <React.Fragment>
    <h1>{post.title}</h1>
  </React.Fragment>
);

export default PostSingle;