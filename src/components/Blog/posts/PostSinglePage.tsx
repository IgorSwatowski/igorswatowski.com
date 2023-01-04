import { Post } from '../../../types/post';

const PostSinglePage = ({ post }: { post: Post }) => {
  const { title, content, createdAt, createdBy } = post;

  const convertDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const convertedDate = convertDate(createdAt);
  return (
    <main>
      <section className="post-single-page">
        <h1>{title}</h1>
        <p>Written by {createdBy?.name}</p>
        <p>on {convertedDate}</p>
        <p>{content?.text}</p>
      </section>
    </main>
  );
};

export default PostSinglePage;
