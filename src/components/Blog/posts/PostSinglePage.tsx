import { Post } from '../../../types/post';

const PostSinglePage = ({ id, title, slug }: Post) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{id}</h2>
    </>
  );
};

export default PostSinglePage;
