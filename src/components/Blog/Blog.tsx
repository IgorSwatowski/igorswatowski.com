import Posts, { PostsProps } from './posts/Posts';

const BlogPage = ({ posts }: PostsProps) => {
  console.log(posts);
  return (
    <main>
      <Posts posts={posts} />
    </main>
  );
};

export default BlogPage;
