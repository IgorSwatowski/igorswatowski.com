import Link from 'next/link';
import { formatDate } from '../../lib/formatDate';
import React from 'react';

const PostCard = ({ post }: any) => {
  const { title, slug, date, author, excerpt } = post.fields;

  return (
    <Link href={`/blog/${slug}`} className='blog-banner-wrapper-blogs-item'>
      <div className='blog-banner-wrapper-blogs-item-date'>
        <p className='paragraph-primary'>
          <span className='color-primary'>/</span>
          {formatDate(date, {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
          <span className='color-primary'>/</span> Written by{' '}
          {author.fields.name}
        </p>
      </div>
      <div className='blog-banner-wrapper-blogs-item-heading'>
        <h3 className='heading-third'> {title}</h3>
      </div>
      <div className='line'></div>
      <div className='blog-banner-wrapper-blogs-item-text'>
        <p className='paragraph-primary'>{excerpt}</p>
      </div>
    </Link>
  );
};

export default PostCard;
