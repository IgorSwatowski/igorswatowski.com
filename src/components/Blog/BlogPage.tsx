import { Post } from '../../types/post';
import PostSinglePage from './posts/PostSinglePage';

export interface PostsProps {
  posts: Post[];
}

const BlogPage = ({ posts }: PostsProps) => {
  console.log(posts);
  return (
    <main>
      {posts.map((post) => {
        return <PostSinglePage key={post.id} title={post.title} slug={post.slug} id={post.id} />;
      })}
    </main>
  );
};

export default BlogPage;
