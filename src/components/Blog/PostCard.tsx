import Link from 'next/link';
import { formatDate } from '../../lib/formatDate';
import React from 'react';
import { PostFields } from '@/types/post';

const PostCard = ({ post }: { post?: PostFields }) => {
  if (!post || !post) {
    return <div>Post not found</div>;
  }

  const { title = '', slug = '', date = '', excerpt = '' } = post;

  return (
    <Link href={`/blog/${slug}`} className='blog-banner-wrapper-blogs-item'>
      <div className='blog-banner-wrapper-blogs-item-information'>
        <div className='blog-banner-wrapper-blogs-item-information-date'>
          <span className='color-primary'>/</span>
          <p className='paragraph-primary'>
            {formatDate(date, {
              weekday: 'long',
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </p>
        </div>
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
