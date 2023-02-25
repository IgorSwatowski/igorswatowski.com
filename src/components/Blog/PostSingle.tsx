import { formatDate } from '../../lib/formatDate';

const PostSingle = ({ post }: any) => {
  const { title, date, content, author } = post.fields;

  return (
    <main>
      <article className='post'>
        <div className='post-wrapper container-box'>
          <h1 className='post-wrapper-heading heading-primary'>{title}</h1>
          <p className='post-wrapper-date paragraph-primary'>
            <span className='color-primary'>/</span>
            {formatDate(date, {
              weekday: 'long',
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}{' '}
            <span className='color-primary'>/</span> Written by{' '}
            {author.fields.name}
          </p>
          <div className='post-wrapper-content'>
            {content.content[0].content[0].value}
          </div>
        </div>
      </article>
    </main>
  );
};

export default PostSingle;
