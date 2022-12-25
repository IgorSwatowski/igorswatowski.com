import PostSinglePage from '../../components/Blog/posts/PostSinglePage';
import { graphqlAPI } from '../../constants/constants';
import { gql, GraphQLClient } from 'graphql-request';
import { Post } from '../../types/post';

const hygraph = new GraphQLClient(graphqlAPI);

export const getStaticProps = async ({
  params,
  locale,
}: {
  params: { id: string };
  locale: string;
}) => {
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
    { id: params?.id, locale },
  );
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async ({ locales }: { locales: string[] }) => {
  let paths: { params: { id: string }; locale: string }[] = [];
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
    paths = [
      ...paths,
      ...posts.map(
        (post: {
          id: string;
          title: string;
          slug: string;
          locale: string;
          createdAt: string;
          pageContent: { text: string };
        }) => ({
          params: { id: post.id },
          locale,
        }),
      ),
    ];
  }

  return {
    paths,
    fallback: false,
  };
};

type PostSingleProps = {
  post: Post;
};

const PostSingle = ({ post }: PostSingleProps) => {
  return <PostSinglePage post={post} />;
};
export default PostSingle;
