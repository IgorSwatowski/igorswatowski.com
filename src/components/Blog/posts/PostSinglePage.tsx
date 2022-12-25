import Link, { LinkProps } from 'next/link';
import { Post } from '../../../types/post';

const PostSinglePage = ({ post }: any) => {
  const { title } = post;
  return <h1>{title}</h1>;
};

export default PostSinglePage;
