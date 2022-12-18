import { GraphQLClient } from 'graphql-request';
import { GetStaticProps } from 'next';
import PostSinglePage from '../../components/Blog/posts/PostSinglePage';
import { graphqlAPI } from '../../constants/constants';
import { getSinglePost } from '../../lib/post';
import { getAllPosts } from '../../lib/posts';

const hygraph = new GraphQLClient(graphqlAPI);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug as string;
  const post = await getSinglePost(slug);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map(({ slug }: any) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

const PostSingle = ({ post }: any) => {
  return <PostSinglePage {...post} />;
};

export default PostSingle;
