import { Post } from '../../../types/post';
import PostSingle from './PostSingle';

export interface PostsProps {
  posts: Post[];
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <div>
      {posts.map((post) => {
        return <PostSingle key={post.id} title={post.title} />;
      })}
    </div>
  );
};

export default Posts;
