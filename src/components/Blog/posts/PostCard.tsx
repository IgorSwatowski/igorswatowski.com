import Link from 'next/link';

<<<<<<< Updated upstream
const PostCard = ({ post }) => {
  const { title, slug, excerpt, author, date } = post.fields;
=======
const PostCard = ({ post }: any) => {
  const { title, slug, date, content, author, excerpt } = post.fields;

  let convertedDate = new Date(date).toLocaleDateString('en-us', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  console.log(excerpt);
>>>>>>> Stashed changes

  return (
    <Link href={`/blog/${slug}`} className='blog-banner-wrapper-blogs-item'>
      <div className='blog-banner-wrapper-blogs-item-date'>
        <p className='paragraph-primary'>
          <span className='color-primary'>/</span>
          {convertedDate} <span className='color-primary'>/</span> Written by{' '}
          {author.fields.name}
        </p>
      </div>
      <div className='blog-banner-wrapper-blogs-item-heading'>
        <h3 className='heading-third'> {title}</h3>
      </div>
      <div className='line'></div>
      <div className='blog-banner-wrapper-blogs-item-text'>
        <p className='paragraph-primary'>
          {/* {content.content[0].content[0].value} */}
          {excerpt}
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
