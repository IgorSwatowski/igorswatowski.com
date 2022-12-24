import { GetStaticProps } from 'next';
import BlogPage, { PostsProps } from '../../components/Blog/BlogPage';
import { getAllPosts } from '../../lib/posts';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await getAllPosts(locale as string);
  return {
    props: {
      posts,
    },
  };
};

const Blog = ({ posts }: PostsProps) => {
  return (
    <>
      <BlogPage posts={posts} />
    </>
  );
};

export default Blog;
