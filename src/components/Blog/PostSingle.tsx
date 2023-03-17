import { formatDate } from '../../lib/formatDate';
import RichText from '../RichText';
import React from 'react';

const PostSingle = ({ post }: any) => {
  const { title, date, content, author } = post.fields;

  return (
    <main>
      <article className='post'>
        <div className='post-wrapper container-box'>
          <h1 className='post-wrapper-heading heading-primary'>{title}</h1>
          <div className='post-wrapper-date paragraph-primary'>
            <span className='color-primary'>/</span>
            <p className='paragraph-primary'>
              {formatDate(date, {
                weekday: 'long',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </p>
            <span className='color-primary'>/</span>
            <p className='paragraph-primary'>Written by {author.fields.name}</p>
          </div>
          <div className='post-wrapper-content'>
            <RichText content={content} />
          </div>
        </div>
      </article>
    </main>
  );
};

export default PostSingle;
