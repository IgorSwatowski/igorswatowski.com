import Link from 'next/link';
import React from 'react';

const PostCard = ({ post }: any) => {
  const { title, slug, excerpt, author, date } = post.fields;

  return (
    <Link href={`/blog/${slug}`} className='blog-banner-wrapper-blogs-item'>
      <div className='blog-banner-wrapper-blogs-item-heading'>
        <h3 className='heading-third'> {title}</h3>
      </div>
      <div className='line'></div>
      <div className='blog-banner-wrapper-blogs-item-date'>
        <p className='paragraph-primary'>Date: {date}</p>
      </div>
    </Link>
  );
};

export default PostCard;
