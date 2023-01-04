import PostSinglePage from '../../components/Blog/posts/PostSinglePage';
import { graphqlAPI } from '../../constants/constants';
import { gql, GraphQLClient } from 'graphql-request';
import { Post } from '../../types/post';

const hygraph = new GraphQLClient(graphqlAPI);

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const { post } = await hygraph.request(
    gql`
      query PostPageQuery($slug: String!) {
        post(where: { slug: $slug }) {
          id
          title
          slug
          createdAt
          content {
            text
          }
          createdBy {
            name
          }
        }
      }
    `,
    { slug: params.slug },
  );
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async ({ locales }: { locales: string[] }) => {
  let paths: { params: { slug: string }; locale: string }[] = [];
  const { posts } = await hygraph.request(
    gql`
      query AllPostsQuery {
        posts {
          id
          title
          slug
          locale
          createdAt
          content {
            text
          }
          createdBy {
            name
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
          content: { text: string };
          createdBy: { name: string };
        }) => ({
          params: { slug: post.slug },
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
