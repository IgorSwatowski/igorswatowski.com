import { Post } from '../../../types/post';

const PostSinglePage = ({ id, title, slug }: Post) => {
  console.log(title);
  console.log(id);
  console.log(slug);
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default PostSinglePage;
