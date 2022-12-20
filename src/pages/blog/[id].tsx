import { GetStaticProps } from 'next';
import PostSinglePage from '../../components/Blog/posts/PostSinglePage';
import { graphqlAPI } from '../../constants/constants';
import { getSinglePost } from '../../lib/post';
import { Post } from '../../types/post';
import request, { gql, GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(graphqlAPI);

export const getStaticProps = async ({ params, locale }) => {
  const { post } = await hygraph.request(
    gql`
      query PostPageQuery($id: ID!, $locale: Locale!) {
        post(where: { id: $id }, locales: [$locale]) {
          id
          title
          slug
          createdAt
        }
      }
    `,
    { id: params.id, locale },
  );
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async ({ locales }) => {
  let paths = [];
  const { posts } = await hygraph.request(
    gql`
      query AllPostsQuery {
        posts {
          id
          title
          slug
          locale
          createdAt
          pageContent {
            text
          }
        }
      }
    `,
  );

  for (const locale of locales) {
    paths = [...paths, ...posts.map((post) => ({ params: { id: post.id }, locale }))];
  }

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

const PostSingle = ({ post }) => {
  return <PostSinglePage post={post} />;
};
export default PostSingle;
