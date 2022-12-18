import { GetStaticProps } from 'next';
import BlogPage from '../../components/Blog/BlogPage';
import { getAllPosts } from '../../lib/posts';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

const Blog = ({ posts }: any) => {
  return (
    <>
      <BlogPage posts={posts} />
    </>
  );
};

export default Blog;
