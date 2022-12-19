import { GetStaticProps } from 'next';
import BlogPage, { PostsProps } from '../../components/Blog/BlogPage';
import { getAllPosts } from '../../lib/posts';
import { request } from 'graphql-request';
import { useRouter } from 'next/router';

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
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
