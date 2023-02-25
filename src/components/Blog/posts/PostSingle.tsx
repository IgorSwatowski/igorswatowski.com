const PostSingle = ({ post }) => {
  const { title, slug, date, content, author, excerpt } = post.fields;

  let convertedDate = new Date(date).toLocaleDateString('en-us', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <main>
      <article className='post'>
        <div className='post-wrapper container-box'>
          <h1 className='post-wrapper-heading heading-primary'>{title}</h1>
          <p className='post-wrapper-date paragraph-primary'>
            <span className='color-primary'>/</span>
            {convertedDate} <span className='color-primary'>/</span> Written by{' '}
            {author.fields.name}
          </p>
          <div className='post-wrapper-content'>
            {post?.node?.content?.find(item =>
              item.marks?.find(mark => mark.type === 'code'),
            )}
          </div>
        </div>
      </article>
    </main>
  );
};

export default PostSingle;
