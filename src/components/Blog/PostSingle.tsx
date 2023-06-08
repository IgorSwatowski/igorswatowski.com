import { formatDate } from '../../lib/formatDate';
import RichText from '../RichText';
import React from 'react';

const PostSingle = ({ post }: any) => {
  const { title, date, content } = post.fields;

  return (
    <main>
      <article className='post container-box'>
        <div className='post-wrapper'>
          <h1 className='post-wrapper-heading heading-primary'>{title}</h1>
          <div className='post-wrapper-information'>
            <div className='post-wrapper-information-date'>
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
          <div className='post-wrapper-content'>
            <RichText content={content} />
          </div>
        </div>
      </article>
    </main>
  );
};

export default PostSingle;
