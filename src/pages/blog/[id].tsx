import { GetStaticProps } from 'next';
import PostSinglePage from '../../components/Blog/posts/PostSinglePage';
import { graphqlAPI } from '../../constants/constants';
import { getSinglePost } from '../../lib/post';
import { Post } from '../../types/post';
import request, { gql, GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(graphqlAPI);

type Post = {
  id: string;
  title: string;
  slug: string;
};

type PostSingleProps = {
  post: Post;
};

export const getStaticProps = async ({ params, locale }) => {
  const { post } = await hygraph.request(
    gql`
      query PostPageQuery($id: ID!, $locale: Locale!) {
        post(where: { id: $id }, locales: [$locale]) {
          id
          title
          slug
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

const PostSingle = ({ post }: PostSingleProps) => {
  console.log(post.title);
  return <pre>{JSON.stringify(post, null, 2)}</pre>;
};
export default PostSingle;
