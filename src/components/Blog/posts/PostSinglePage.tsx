import Link, { LinkProps } from 'next/link';
import { Post } from '../../../types/post';

const PostSinglePage = ({ title }: Post) => {
  console.log(title);
  return <h1>{title}</h1>;
};

export default PostSinglePage;
