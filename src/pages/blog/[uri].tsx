import { gql } from '@apollo/client';
import Head from 'next/head';
import { client } from '../../lib/apollo';

export default function BlogPostSingle({ post }) {
  return (
    <div>
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <section className="post-single-page">
          <h1>{post.title}</h1>
          <p>on {post.date}</p>
          <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    query GetAllPosts($id: ID!) {
      post(id: $id, idType: URI) {
        author {
          node {
            firstName
            lastName
            name
            nickname
            uri
          }
        }
        title
        content
        date
        uri
      }
    }
  `;
  const response = await client.query({
    query: GET_POST_BY_URI,
    variables: {
      id: params.uri,
    },
  });
  const post = response?.data?.post;
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: 'blocking',
  };
}
