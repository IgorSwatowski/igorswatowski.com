import { GetStaticProps } from 'next';
import { getSinglePost } from '../../../lib/post';
import { Post } from '../../../types/post';

export const getStaticProps: GetStaticProps = async () => {
  const post = await getSinglePost();
  return {
    props: {
      post,
    },
  };
};

const PostSingle = ({ title }: Post) => {
  console.log(title);
  return <p>{title}</p>;
};

export default PostSingle;
