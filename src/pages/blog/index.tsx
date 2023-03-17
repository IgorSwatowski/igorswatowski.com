import { useRouter } from 'next/router';

import { en } from '../../i18n/locales/en';
import { pl } from '../../i18n/locales/pl';

import PostCard from '../../components/Blog/PostCard';
import { client } from '../../lib/contentful/client';
import { CONTENT_TYPE } from '../../constants/constants';
import { useEffect, useState } from 'react';

const Posts = ({ posts, categories }: any) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : pl;

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <main>
      <section className='blog-banner'>
        <div className='blog-banner-wrapper container-box'>
          <h1 className='blog-banner-wrapper-heading heading-primary underline'>
            {t.blogHero}
          </h1>
          <p className='blog-banner-wrapper-text paragraph-primary'>
            {t.blogHeroText}
          </p>
          <div className='blog-banner-wrapper-categories'>
            {categories.length < 1 ? (
              <p className='paragraph-primary'>{t.posts}</p>
            ) : (
              categories.map((category: any) => (
                <div
                  className='blog-banner-wrapper-categories-item'
                  key={category.fields.slug}
                >
                  <button
                    onClick={() => setSelectedCategory(category.fields.slug)}
                  >
                    {category.fields.title}
                  </button>
                </div>
              ))
            )}
          </div>
          <div className='blog-banner-wrapper-blog'>
            <div className='blog-banner-wrapper-blogs'>
              {posts.length < 1 ? (
                <p className='paragraph-primary'>{t.posts}</p>
              ) : (
                posts.map((post: any) => (
                  <PostCard key={post.fields.slug} post={post} />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: CONTENT_TYPE.POST });

  const category = await client.getEntries({
    content_type: CONTENT_TYPE.CATEGORY,
  });

  return {
    props: {
      posts: response.items,
      categories: category.items,
    },
  };
};

export default Posts;
